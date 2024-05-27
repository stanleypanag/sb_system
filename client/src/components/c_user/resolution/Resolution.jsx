import React, { useState } from "react";
import "./resolution.css";
import { resolutionData } from "./resolution.js";
import boyerMooreSearch from "./boyerMoore";

const Resolution = () => {
  const [search, setSearch] = useState("");

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
              {/* {resolutionData
                .filter((item) => {
                  const searchLower = search.toLowerCase();
                  const yearString = String(item.year); // Convert to string
                  return (
                    searchLower === "" ||
                    item.resolution_number
                      .toLowerCase()
                      .includes(searchLower) ||
                    item.title.toLowerCase().includes(searchLower) ||
                    yearString.toLowerCase().includes(searchLower)
                  );
                }) */}
              {resolutionData
                .filter((item) => {
                  const searchLower = search.toLowerCase();
                  const yearString = String(item.year); // Convert to string

                  const resolutionNumberLower =
                    item.resolution_number.toLowerCase();
                  const titleLower = item.title.toLowerCase();
                  const contentLower = item.content.toLowerCase();

                  return (
                    searchLower === "" ||
                    boyerMooreSearch(resolutionNumberLower, searchLower) !==
                      -1 ||
                    boyerMooreSearch(titleLower, searchLower) !== -1 ||
                    boyerMooreSearch(yearString, searchLower) !== -1 ||
                    boyerMooreSearch(contentLower, searchLower) !== -1
                  );
                })
                .map((item) => (
                  <div
                    className="flex flex-col bg-white border border-gray-400 shadow-sm"
                    key={item.id}
                  >
                    <div className="bg-gray-800 border-b py-3 px-4 md:py-4 md:px-5">
                      <p className="mt-1 text-sm text-white">
                        Resolution No. {item.resolution_number}
                      </p>
                    </div>
                    <div className="p-4 md:p-5">
                      <h3 className="text-lg font-bold text-gray-800">
                        {item.title}
                      </h3>
                      <a
                        className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none"
                        href="#"
                      >
                        Card link
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
                      </a>
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
