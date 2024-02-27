import React from "react";
import Logo from "../../assets/logo.png";
import "./header.css";

import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* <!-- Announcement Banner --> */}
      <div class="bg-gray-300">
        <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
          {/* <!-- Grid --> */}
          <div class="grid justify-center md:grid-cols-2 md:justify-between gap-2">
            <div class="text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
              <p class="me-5 inline-block text-sm font-semibold text-gray-800">
                Want to download a copy?
              </p>
              <Link
                class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border-2 border-gray-800 text-gray-800 hover:border-blue-900 hover:text-blue-900 disabled:opacity-50 disabled:pointer-events-none"
                to={"/register"}
              >
                Sign up
              </Link>
            </div>
            {/* <!-- End Col --> */}

            <div class="brand-logo flex items-center order-1">
              <Link
                class="inline-flex items-center gap-x-2 text-xl font-semibold"
                to={"/"}
              >
                <img class="w-10 h-auto" src={Logo} alt="Logo" />
                <h1 className="tracking-widest uppercase text-xs text-gray-800">
                  Bayan Ng Naic
                </h1>
              </Link>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End Announcement Banner --> */}

      {/* <!-- ========== HEADER ========== --> */}
      <header class="flex flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-gray-800 text-sm sm:pb-0">
        <nav
          class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 py-5"
          aria-label="Global"
        >
          <div class="flex items-center justify-between">
            <div className="join">
              <div>
                <div>
                  <input
                    className="search input w-[20rem] input-bordered join-item rounded-tl-full rounded-bl-full bg-gray-200"
                    placeholder=""
                  />
                </div>
              </div>
              <select className="filter select select-bordered join-item w-30 bg-gray-700 text-white">
                <option disabled selected className="text-gray-200 font-bold">
                  Select Docs
                </option>
                <option className="text-gray-200 font-bold">Resolution</option>
                <option className="text-gray-200 font-bold">Ordinance</option>
              </select>
              <div className="indicator">
                <button className="btn join-item bg-gray-700 hover:bg-gray-600 text-white border border-none rounded-tr-full rounded-br-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class="sm:hidden">
              <button
                type="button"
                class="hs-collapse-toggle size-10 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 bg-white disabled:opacity-50 disabled:pointer-events-none"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  class="hs-collapse-open:hidden flex-shrink-0 size-4"
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
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  class="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <Link
                class="font-medium sm:py-6 text-white hover:text-gray-600"
                to={"/"}
                aria-current="page"
              >
                HOME
              </Link>
              <a
                class="font-medium text-white hover:text-gray-500 sm:py-6"
                href="/#about"
              >
                ABOUT
              </a>

              <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:click] sm:py-4">
                <button
                  type="button"
                  class="flex items-center text-white hover:text-gray-500 font-medium"
                >
                  SEE DOCUMENTS
                  <svg
                    class="flex-shrink-0 ms-2 size-4"
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

                <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <Link
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    to={"/resolution"}
                  >
                    Resolution
                  </Link>
                  <Link
                    class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    to={"/ordinance"}
                  >
                    Ordinance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- ========== END HEADER ========== --> */}
    </>
  );
};

export default Header;
