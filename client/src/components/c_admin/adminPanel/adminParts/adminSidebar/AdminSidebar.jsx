import React from "react";
import { Link } from "react-router-dom";
import Resolution from "../../../../assets/Resolution.png";
import Ordinance from "../../../../assets/Ordinance.png";
import Users from "../../../../assets/Users.png";
import { supabase } from "../../../../../supabase/supabase.js";

const AdminSidebar = () => {
  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className="flex h-[100vh] w-16 flex-col justify-between"
        style={{ backgroundColor: "#FCF6D6" }}
      >
        <div>
          <div className="inline-flex size-16 items-center justify-center">
            <span className="grid size-10 place-content-center rounded-lg bg-gray-800 text-xs text-gray-200">
              L
            </span>
          </div>

          <div className="border-t border-gray-100">
            <div className="px-2">
              <ul className="space-y-1 border-t border-gray-900 pt-4">
                <li>
                  <Link
                    to={"/"}
                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                  >
                    <img src={Users} alt="Manage Users" />
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
                    <img src={Resolution} alt="Manage Resolution" />
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
                    <img src={Ordinance} alt="Manage Ordinance" />
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
          <button
            type="button"
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            onClick={handleSignOut}
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
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
