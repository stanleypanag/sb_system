import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Users from "../../../../assets/Users.png";
import Dashboard from "../../../../assets/Dashboard.png";
import Docs from "../../../../assets/Docs.png";
import Profile from "../../../../assets/Profile.png";
import WebView from "../../../../assets/WebView.png";
import Event from "../../../../assets/Event.png";
import { User } from "../../../../../loader/index.js";
import { supabase } from "../../../../../supabase/supabase.js";

const AdminSidebar = () => {
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        const user = session.user;
        setUserEmail(user.email);
      }
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange(() => {
      fetchSession();
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

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
      <div className="h-full p-3 space-y-2 w-60 bg-gray-900 divide-y">
        <div className="flex items-center p-2 space-x-4">
          <img src={Profile} alt="" className="w-12 h-12" />
          <div>
            <h2 className="text-[10px] font-light text-gray-300 italic">
              {userEmail}
            </h2>
            <span className="flex items-center space-x-1 text-gray-400">
              admin
            </span>
          </div>
        </div>
        <div className="divide-y">
          <ul className="pt-10 pb-10 space-y-5 text-sm">
            <li>
              <Link
                rel="noopener noreferrer"
                to="/"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={Dashboard} className="w-5 h-5 fill-current" />
                <span className="text-gray-300">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                to="/userManager"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={Users} className="w-5 h-5 fill-current" />
                <span className="text-gray-300">User Manager</span>
              </Link>
            </li>
            <li>
              <Link
                rel="noopener noreferrer"
                to="/eventLogs"
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <img src={Event} className="w-5 h-5 fill-current" />
                <span className="text-gray-300">Event Logs</span>
              </Link>
            </li>
          </ul>
          <ul className="pt-10 space-y-5 text-sm">
            <li>
              <button
                rel="noopener noreferrer"
                className="flex items-center p-2 space-x-3 rounded-md"
                data-hs-overlay="#hs-sign-out-alert"
                onClick={handleSignOut}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                  color="white"
                >
                  <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                  <rect width="32" height="64" x="256" y="232"></rect>
                </svg>
                <span className="text-gray-300">Logout</span>
              </button>
            </li>
            {/* MODAL START */}
            <div
              id="hs-sign-out-alert"
              class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto"
            >
              <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div class="relative flex flex-col bg-white shadow-lg rounded-xl dark:bg-neutral-900">
                  <div class="absolute top-2 end-2">
                    <button
                      type="button"
                      class="flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-neutral-700"
                      data-hs-overlay="#hs-sign-out-alert"
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
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>

                  <div class="p-4 sm:p-10 text-center overflow-y-auto">
                    {/* <!-- Icon --> */}
                    <span class="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:text-yellow-100">
                      <svg
                        class="flex-shrink-0 size-5"
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

                    <h3 class="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200">
                      Sign out
                    </h3>
                    <p class="text-gray-500 dark:text-neutral-500">
                      Are you sure you would like to sign out of your Preline
                      account?
                    </p>

                    <div class="mt-6 flex justify-center gap-x-4">
                      <a
                        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                        href="#"
                      >
                        Sign out
                      </a>
                      <button
                        type="button"
                        class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        data-hs-overlay="#hs-sign-out-alert"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
