import React, { useState, useEffect } from "react";
import axios from "axios";
import { supabase } from "../../../supabase/supabase";
import { useLocation } from "react-router-dom";
import boyerMooreSearch from "../algorithm/boyerMoore";
import "./ordinance.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Resolution = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get("search");
  const [search, setSearch] = useState(searchValue);
  const [responseData, setResponseData] = useState([]);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDocUrl, setCurrentDocUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [downloadDisabler, setDownloadDisabler] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const loggedInStatus = !!session;

      setIsLoggedIn(loggedInStatus);
      setDownloadDisabler(loggedInStatus ? "" : "#toolbar=0");
    };

    const fetchDocument = async () => {
      try {
        const response = await axios.get(
          ` ${BASE_URL}/api/documents/ordinance/`
        );
        setResponseData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataWithDelay = () => {
      setTimeout(() => {
        fetchSession();
        fetchDocument();
        setIsLoading(false); // Set loading to false after data fetching is complete
      }, 1000); // Simulate 1 seconds loading delay
    };

    fetchDataWithDelay();

    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      fetchSession();
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const filterData = () => {
      const filtered = responseData.filter((item) => {
        const searchLower =
          typeof search === "string" && search.trim().length > 0
            ? search.toLowerCase()
            : "";
        const yearString = String(item.doc_series_yr);
        const ordinanceNumberLower = String(item.doc_number);
        const titleLower = item.doc_title.toLowerCase();

        const containsSearch =
          searchLower === "" ||
          boyerMooreSearch(ordinanceNumberLower, searchLower) ||
          boyerMooreSearch(titleLower, searchLower) ||
          boyerMooreSearch(yearString, searchLower);

        return containsSearch;
      });
      setFilteredData(filtered);
      console.log(filtered);
    };

    filterData();
  }, [responseData, search]);

  const openModal = (docUrl) => {
    setCurrentDocUrl(docUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentDocUrl(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <main className="h-full bg-gray-300 pt-20">
        <div className="resolution-content pt-20">
          <div className="tracking-widest text-center text-gray-600 text-4xl uppercase">
            <h1>Ordinances</h1>
          </div>

          <label htmlFor="search-input" className="sr-only">
            Search
          </label>
          <div className="flex justify-center mt-10 rounded-lg shadow-sm">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search by [resolution number, title, year]"
              id="search-input"
              className="py-3 px-4 block w-full border-2 border-gray-900 text-sm dark:bg-white dark:border-gray-700 dark:text-black"
              value={search}
            />
          </div>

          <div className="max-w-[40rem] px-10 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
            <div className="grid lg:grid-cols-1 lg:gap-y-10 gap-10">
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <h1 className="text-white text-xl mr-5 font-bold">
                    Loading...
                  </h1>
                  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-white"></div>
                </div>
              ) : (
                filteredData.map((item) => (
                  <div
                    className="flex flex-col bg-white border border-gray-400 shadow-sm"
                    key={item.doc_id}
                  >
                    <div className="bg-gray-800 border-b py-3 px-4 md:py-4 md:px-5 flex justify-between">
                      <p className="mt-1 text-sm text-white uppercase">
                        Oridinance No. {item.doc_number}
                      </p>
                      <p className="mt-1 text-sm text-gray-200">
                        S.Y. {item.doc_series_yr}
                      </p>
                    </div>
                    <div className="p-4 md:p-5">
                      <h3 className="text-m font-light text-gray-600 text-justify">
                        {item.doc_title}
                      </h3>
                      <button
                        className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                        type="button"
                        onClick={() => openModal(item.doc_file_url)}
                      >
                        View Document
                        <svg
                          className="flex-shrink-0 w-4 h-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-hidden max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h3 className="font-bold text-gray-700 uppercase">
                Ordinance Document Viewer
              </h3>
              <button
                type="button"
                className="text-gray-800 hover:bg-gray-100 rounded-full p-2"
                onClick={closeModal}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <iframe
                src={`${currentDocUrl}${downloadDisabler}`}
                width="100%"
                height="500"
              />
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium rounded-lg border border-gray-200 bg-gray-400 text-gray-800 hover:bg-gray-50"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Resolution;
