import React from "react";
import {Link} from "react-router-dom";

const RecentDocs = () => {
  return (
    <>
      <div>
        <h1 className="text-center mt-10 mb-10 text-2xl text-gray-600 font-bold uppercase tracking-widest">
          Recently Uploaded Documents
        </h1>

        {/* <!-- Card Blog --> */}
        <div className="max-w-[85rem] px-10 py-5 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid lg:grid-cols-4 lg:gap-y-16 gap-10">
            {/* <!--Resolution Card --> */}
            <div className="flex flex-col bg-white border border-gray-400 shadow-sm">
              <div className="bg-gray-800 border-b py-3 px-4 md:py-4 md:px-5">
                <p className="mt-1 text-sm text-white">Resolution No. 1</p>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">Card title</h3>
                <p className="mt-2 text-gray-500">
                  With supporting text below as a natural lead-in to additional
                  content.
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
            {/* <!--Resolution End Card --> */}

            {/* <!--Ordinance Card --> */}
            <div className="flex flex-col bg-white border border-gray-400 shadow-sm">
              <div className="bg-gray-800 border-b py-3 px-4 md:py-4 md:px-5">
                <p className="mt-1 text-sm text-white">Ordinance No. 1</p>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">Card title</h3>
                <p className="mt-2 text-gray-500">
                  With supporting text below as a natural lead-in to additional
                  content.
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
            {/* <!--Ordinance End Card --> */}

            <div className="flex flex-col bg-white border border-gray-400 shadow-sm">
              <div className="bg-gray-800 border-b py-3 px-4 md:py-4 md:px-5">
                <p className="mt-1 text-sm text-white">Ordinance No. 1</p>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">Card title</h3>
                <p className="mt-2 text-gray-500">
                  With supporting text below as a natural lead-in to additional
                  content.
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
            {/* <!--Ordinance End Card --> */}

            <div className="flex flex-col bg-white border border-gray-400 shadow-sm">
              <div className="bg-gray-800 border-b py-3 px-4 md:py-4 md:px-5">
                <p className="mt-1 text-sm text-white">Ordinance No. 1</p>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">Card title</h3>
                <p className="mt-2 text-gray-500">
                  With supporting text below as a natural lead-in to additional
                  content.
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
            {/* <!--Ordinance End Card --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Card Blog --> */}
      </div>

      <div class="hs-dropdown relative inline-flex mx-auto text-center [--trigger:hover]">
        <button
          id="hs-dropdown-hover-event"
          type="button"
          class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-tr-full rounded-br-full border border-gray-200 bg-blue-300 text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none"
        >
          See more
          <svg
            class="hs-dropdown-open:rotate-180 size-4"
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
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>

        <div
          class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
          aria-labelledby="hs-dropdown-hover-event"
        >
          <Link
            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            to={"/resolution"}
          >
            Resolution
          </Link>
          <Link
            class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            to={"/ordinance"}
          >
            Ordinance
          </Link>
        </div>
      </div>
    </>
  );
};

export default RecentDocs;
