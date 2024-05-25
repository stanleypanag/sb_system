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
              <div className="py-4">
                <Link
                  to={"/"}
                  className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                >
                  <img src={Dashboard2} />

                  <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                    Admin Dashboard
                  </span>
                </Link>
              </div>

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

                    <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                      Manage Ordinance
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 p-2">
          <form action="#">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
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
      </div>
    </>
  );
};

export default AdminSidebar;
