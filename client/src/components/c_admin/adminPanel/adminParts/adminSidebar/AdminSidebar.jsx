import React from "react";
import { Link } from "react-router-dom";
import Dashboard2 from "../../../../assets/Dashboard2.png";
import Resolution from "../../../../assets/Resolution.png";
import Ordinance from "../../../../assets/Ordinance.png";
import Users from "../../../../assets/Users.png";

const AdminSidebar = () => {
  return (
    <>
      <div className="flex h-[100vh] w-16 flex-col justify-between border-e border-gray-400 bg-gray-200">
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              L
            </span>
          </div>

          <div className="border-t border-gray-100">
            <div className="px-2">
              <ul className="space-y-1 border-t border-gray-100 pt-4">
                <li>
                  <Link
                    to={"/userManager"}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <img src={Users} />
                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Manage Users
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/resolutionManager"}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <img src={Resolution} />

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Manage Resolution
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/ordinanceManager"}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <img src={Ordinance} />

                    <span className="invisible absolute start-full top-1 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Manage Ordinance
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 p-2">
          <form>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              data-hs-overlay="#hs-sign-out-alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                Logout
              </span>
            </button>
          </form>
        </div>
        {/* MODAL START */}
        <div
          id="hs-sign-out-alert"
          className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"
        >
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="relative flex flex-col bg-white shadow-lg rounded-xl">
              <div className="absolute top-2 end-2">
                <button
                  type="button"
                  className="flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  data-hs-overlay="#hs-sign-out-alert"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="flex-shrink-0 size-4"
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
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>

              <div className="p-4 sm:p-10 text-center overflow-y-auto">
                {/* <!-- Icon --> */}
                <span className="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500">
                  <svg
                    className="flex-shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </span>
                {/* <!-- End Icon --> */}

                <h3 className="mb-2 text-2xl font-bold text-gray-800">
                  Sign out
                </h3>
                <p className="text-gray-500">
                  Are you sure you want to sign out?
                </p>

                <div className="mt-6 flex justify-center gap-x-4">
                  <a
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Sign out
                  </a>
                  <button
                    type="button"
                    className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    data-hs-overlay="#hs-sign-out-alert"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MODAL END */}
      </div>
    </>
  );
};

export default AdminSidebar;
