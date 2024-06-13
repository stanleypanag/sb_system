import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../../../supabase/supabase";
import "./recentDocs.css";

const RecentDocs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [resolutionData, setResolutionData] = useState([]);
  const [loggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [window.location.pathname]);

  // NEW
  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        setIsLoggedIn(true);
      }
    };

    const fetchData = async () => {
      setIsLoading(true); // Set loading to true when fetching data

      try {
        // Simulate delay with setTimeout (remove in production)
        const { data, error } = await supabase
          .from("document")
          .select("*")
          .order("created_at", { ascending: false }) // Adjust the field name if necessary
          .limit(3);

        if (error) {
          console.error("Error fetching data:", error);
          setResolutionData([]);
        } else if (!data || data.length === 0) {
          console.log("No data found");
          setResolutionData([]);
        } else {
          console.log("Data fetched:", data);
          setResolutionData(data);
        }

        setIsLoading(false); // Set loading to false after data fetching completes
        // Simulated delay of 2000 milliseconds (2 seconds)
      } catch (error) {
        console.error("Error fetching data:", error);
        setResolutionData([]);
        setIsLoading(false); // Ensure loading state is turned off even on error
      }
    };

    const fetchDataWithDelay = () => {
      setTimeout(() => {
        fetchSession();
        fetchData();
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

  // NEW
  const handleViewDocument = async (documentId) => {
    const bucketName = "pdf-bucket";
    const filePath = `RESOLUTION/${documentId}`;

    const { data, error } = await supabase.storage
      .from(bucketName)
      .createSignedUrl(filePath, 60); // 60 seconds expiration

    if (error) {
      console.error(error);
      return;
    }
    const pdfUrl = data.signedUrl;

    window.open(pdfUrl, "_blank");
  };

  // NEW
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
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
            ) : resolutionData.length === 0 ? (
              <p className="text-center text-white ">No resolutions found.</p>
            ) : (
              resolutionData.map((item) => (
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
                  <div className="p-4 md:p-5">
                    <h3 className="text-sm font-light text-gray-600 text-justify">
                      {item.doc_title}
                    </h3>
                    <button
                      className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                      type="button"
                      onClick={() => handleViewDocument(item.doc_file_name)}
                      disabled={!loggedIn}
                    >
                      {!loggedIn ? "Login to View" : "View Document"}
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
    </>
  );
};

export default RecentDocs;
