import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../../../supabase/supabase";
import axios from "axios";
import "./recentDocs.css";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const RecentDocs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [responseData, setResponseData] = useState([]);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDocUrl, setCurrentDocUrl] = useState(null);
  const [downloadDisabler, setDownloadDisabler] = useState("");

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [window.location.pathname]);

  // NEW
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
        const response = await axios.get(`https://${BASE_URL}/api/documents`);
        const data = response.data.data;
        const sortedData = data.sort((a, b) => b.updatedAt - a.updatedAt);
        setResponseData(sortedData.slice(-3));
        console.log(sortedData);
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

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

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
      <div className="recent-docs pb-10 pt-20">
        <h1 className="text-center pt-20 mb-10 text-2xl text-white uppercase tracking-widest">
          Recently Upload Documents
        </h1>

        {/* <!-- Card Blog --> */}
        <div className="max-w-[85rem] px-10 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid lg:grid-cols-3 lg:gap-y-16 gap-10">
            {/* CARD PLACEMENT */}
            {isLoading ? (
              <div className="flex justify-center items-center w-[90vw]">
                <h1 className="text-white text-xl mr-5 font-bold">
                  Loading...
                </h1>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-white"></div>
              </div>
            ) : responseData.length === 0 ? (
              <p className="text-center text-white "></p>
            ) : (
              responseData.map((item) => (
                <div
                  className="flex flex-col bg-white shadow-sm rounded-tl-xl rounded-tr-xl rounded-bl-lg rounded-br-lg"
                  key={item.doc_id}
                >
                  <div className="bg-gray-800 border-b py-3 px-4 md:py-4 md:px-5 flex justify-between rounded-tl-lg rounded-tr-lg">
                    <p className="mt-1 text-sm text-white uppercase">
                      {item.doc_type} No. {item.doc_number}
                    </p>
                    <p className="mt-1 text-sm text-gray-200">
                      S.Y. {item.doc_series_yr}
                    </p>
                  </div>
                  <div className="p-4 md:p-5 flex flex-col">
                    <div className="h-[12vh] overflow-hidden">
                      <h3 className="text-sm font-light text-gray-600 text-justify line-clamp-4">
                        {item.doc_title}
                      </h3>
                    </div>
                    <div className="mt-auto">
                      <button
                        className="inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none"
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
                </div>
              ))
            )}

            {/* END OF CARD PLACEMENT */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Card Blog --> */}

        <div className="hs-dropdown relative inline-flex mx-auto text-center [--trigger:click] mt-10">
          <button
            id="hs-dropdown-hover-event"
            type="button"
            className="hs-dropdown-toggle h-[3rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-tr-full rounded-br-full border-3 border-gray-200 border-l-0 bg-gray-200 text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none"
            onClick={toggleDropdown}
          >
            See more Documents
            <svg
              className={`size-5 ${isDropdownOpen ? "rotate-180" : ""}`}
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
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            className={`hs-dropdown-menu transition-[opacity,margin] duration ${
              isDropdownOpen ? "opacity-100" : "opacity-0"
            } min-w-90 bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full`}
            aria-labelledby="hs-dropdown-hover-event"
          >
            <Link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              to={"/resolution"}
            >
              Resolution
            </Link>
            <Link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              to={"/ordinance"}
            >
              Ordinance
            </Link>
          </div>
        </div>
      </div>
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
                Resolution Document Viewer
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
            <div className="p-4 overflow-y-visble flex justify-center">
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

export default RecentDocs;
