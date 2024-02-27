import React, {useState} from "react";
import "./resolution.css";
import {resolutionData} from "./resolution.js";

const Resolution = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <main className="h-full">
        <div className="resolution-content mt-20">
          <div className="tracking-widest text-center text-gray-700 text-5xl">
            <h1>Naic Resolutions</h1>
          </div>

          <label for="hs-trailing-button-add-on-with-icon" className="sr-only">
            Label
          </label>
          <div className="flex justify-center mt-10 rounded-lg shadow-sm">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              id="hs-trailing-button-add-on-with-icon"
              name="hs-trailing-button-add-on-with-icon"
              className="py-3 px-4 block w-full border-2 border-gray-900 rounded-tl-full rounded-bl-full text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:border-gray-700 dark:text-black"
            />
            <button
              type="button"
              className="w-[2.875rem] h-[3rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-gray-900 text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              <svg
                className="flex-shrink-0 size-4"
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
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>

          <div className="max-w-[40rem] px-10 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
            {/* <!-- Grid --> */}

            {/* <!--Resolution Card --> */}
            <div className="grid lg:grid-cols-1 lg:gap-y-10 gap-10">
              {resolutionData
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
                      <p className="mt-2 text-gray-500">
                        {item.content.length > 100
                          ? item.content.slice(0, 100) + "..." // Limit content to 100 characters
                          : item.content}
                      </p>
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
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
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
