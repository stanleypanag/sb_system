import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../../../supabase/supabase.js";
import "./login.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/"); // Redirect to home page or wherever you want after successful login
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: "/", // Redirect to dashboard page
        },
      });

      if (error) {
        setError(error.message);
      } else {
        navigate("/"); // Redirect to home page or wherever you want after successful login
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="h-full">
      <div className="bg-gray-300 flex h-full items-center pt-20">
        <main className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-gray-800 border border-gray-800 rounded-xl shadow-sm">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-5xl font-bold text-gray-400">
                  Sign in
                </h1>
                <p className="mt-2 text-sm text-gray-400">
                  Don't have an account yet? <br></br>
                  <Link
                    className="text-gray-400 decoration-2 hover:underline font-medium"
                    to="/register"
                  >
                    Sign up here
                  </Link>
                </p>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-800 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  onClick={handleGoogleSignIn}
                >
                  <svg
                    className="w-4 h-auto"
                    width="46"
                    height="47"
                    viewBox="0 0 46 47"
                    fill="none"
                  >
                    <path
                      d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                      fill="#34A853"
                    />
                    <path
                      d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                      fill="#EB4335"
                    />
                  </svg>
                  Sign in with Google
                </button>

                <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
                  Or
                </div>

                {error && (
                  <div className="text-red-500 text-sm mb-2 text-center">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 text-gray-400"
                      >
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="searchbox py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          aria-describedby="email-error"
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="password"
                          className="block text-sm mb-2 text-gray-400"
                        >
                          Password
                        </label>
                        <div className="text-center">
                          <button
                            type="button"
                            className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
                            data-hs-overlay="#hs-sign-out-alert"
                          >
                            Forgot Password?
                          </button>
                        </div>
                      </div>
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
                              <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                                <div class="bg-gray-400 border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-800">
                                  <div class="p-4 sm:p-7">
                                    <div class="text-center">
                                      <h2 class="block text-2xl font-bold text-gray-800 dark:text-neutral-200">
                                        Forgot password?
                                      </h2>
                                    </div>

                                    <div class="mt-5">
                                      {/* <!-- Form --> */}
                                      <form>
                                        <div class="grid gap-y-4">
                                          {/* <!-- Form Group --> */}
                                          <div>
                                            <label
                                              for="email"
                                              class="block text-sm mb-2 dark:text-white"
                                            >
                                              Email address
                                            </label>
                                            <div class="relative">
                                              <input
                                                type="email"
                                                id="verifyEmail"
                                                name="email"
                                                class="py-3 px-4 block w-full border border-gray-800 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                required
                                                aria-describedby="email-error"
                                              />
                                              <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                                <svg
                                                  class="size-5 text-red-500"
                                                  width="16"
                                                  height="16"
                                                  fill="currentColor"
                                                  viewBox="0 0 16 16"
                                                  aria-hidden="true"
                                                >
                                                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                </svg>
                                              </div>
                                            </div>
                                            <p
                                              class="hidden text-xs text-red-600 mt-2"
                                              id="email-error"
                                            >
                                              Please include a valid email
                                              address so we can get back to you
                                            </p>
                                          </div>
                                          {/* <!-- End Form Group --> */}

                                          <button
                                            type="submit"
                                            class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-700 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
                                          >
                                            Reset password
                                          </button>
                                        </div>
                                      </form>
                                      {/* <!-- End Form --> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* MODAL END */}
                      <div className="relative">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="searchbox py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                          aria-describedby="password-error"
                        />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="searchbox shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events focus:ring-blue-500"
                        />
                      </div>
                      <div className="ms-3">
                        <label
                          htmlFor="remember-me"
                          className="text-sm text-gray-400"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-700 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
