import React, { useState, useEffect } from "react";
import { resolutionData } from "./resolution.js";
import boyerMooreSearch from "../algorithm/boyerMoore.js";
import { supabase } from "../../../supabase/supabase.js";
import samplePDF from "../../assets/samplePDF.pdf";
import "./resolution.css";

const Resolution = () => {
  const [search, setSearch] = useState("");
  const [loggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then((user) => {
      setIsLoggedIn(!!user);
    });
  }, []);

  return (
    <>
      <main className="h-full bg-gray-300 pt-20">
        <div className="resolution-content pt-20">
          <div className="tracking-widest text-center text-gray-600 text-4xl uppercase">
            <h1>Resolutions</h1>
          </div>

          <label
            htmlFor="hs-trailing-button-add-on-with-icon"
            className="sr-only"
          >
            Label
          </label>
          <div className="flex justify-center mt-10 rounded-lg shadow-sm">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search by ff... [resolution number, title, year]"
              id="hs-trailing-button-add-on-with-icon"
              name="hs-trailing-button-add-on-with-icon"
              className="py-3 px-4 block w-full border-2 border-gray-900 text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-gray-700 dark:text-black"
            />
          </div>

          <div className="max-w-[40rem] px-10 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
            {/* <!-- Grid --> */}

            {/* <!--Resolution Card --> */}
            <div className="grid lg:grid-cols-1 lg:gap-y-10 gap-10">
              {resolutionData
                .filter((item) => {
                  const searchLower = search.toLowerCase();
                  const yearString = String(item.doc_series_yr); // Convert to string

                  const resolutionNumberLower = item.doc_number.toLowerCase();
                  const titleLower = item.doc_title.toLowerCase();

                  return (
                    searchLower === "" ||
                    boyerMooreSearch(resolutionNumberLower, searchLower) !==
                      -1 ||
                    boyerMooreSearch(titleLower, searchLower) !== -1 ||
                    boyerMooreSearch(yearString, searchLower) !== -1
                  );
                })
                .map((item) => (
                  <div
                    className="flex flex-col bg-white border border-gray-400 shadow-sm"
                    key={item.id}
                  >
                    <div className="bg-gray-800 border-b py-3 px-4 md:py-4 md:px-5 flex justify-between">
                      <p className="mt-1 text-sm text-white uppercase">
                        Resolution No. {item.doc_number}
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
                        data-hs-overlay="#hs-large-modal"
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

                      {/* MODAL START */}
                      <div
                        id="hs-large-modal"
                        class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none"
                      >
                        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
                          <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                              <h3 class="font-bold text-gray-700 dark:text-white">
                                Document Viewer
                              </h3>
                              <button
                                type="button"
                                class="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                                data-hs-overlay="#hs-large-modal"
                              >
                                <span class="sr-only">Close</span>
                                <svg
                                  class="flex-shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M18 6 6 18"></path>
                                  <path d="m6 6 12 12"></path>
                                </svg>
                              </button>
                            </div>
                            <div class="p-4 overflow-y-auto">
                              {loggedIn ? (
                                <iframe
                                  src={samplePDF}
                                  frameborder="0"
                                  width="100%"
                                  height="500"
                                />
                              ) : (
                                <h1>You must login first to view the PDF</h1>
                              )}
                            </div>
                            <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
                              <button
                                type="button"
                                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-red-400 text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                                data-hs-overlay="#hs-large-modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* <!--Resolution End Card --> */}
            </div>
            {/* <!-- End Grid --> */}
          </div>
          {/* <!-- End Card Blog --> */}
        </div>
      </main>
    </>
  );
};

export default Resolution;
