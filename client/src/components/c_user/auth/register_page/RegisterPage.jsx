import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../../../supabase/supabase.js";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [verificationToken, setVerificationToken] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        setError(error.message);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleManualSignUp = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        // Extract the verification token from the session object

        //OLD ONE===========================================
        // const verificationToken =
        //   session?.data.session?.user.confirmation_token;
        //=================================================

        const token_to_verify = session?.data?.user?.confirmation_token;

        // Update the verificationToken state with the extracted token
        setVerificationToken(token_to_verify);

        setSuccess(
          `A verification email has been sent to ${email}. Please check your inbox and click on the verification link to complete your registration.`
        );
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="h-full">
        <div className="bg-gray-300 flex h-full items-center pt-20">
          <main className="w-full max-w-md mx-auto p-6">
            <div className="mt-7 bg-gray-800 border border-gray-800 rounded-xl shadow-sm">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h1 className="block text-5xl font-bold text-gray-400">
                    Sign up
                  </h1>
                  <p className="mt-2 text-sm text-gray-400">
                    Already have an account?
                    <Link
                      className="text-gray-400 decoration-2 hover:underline font-medium ml-1"
                      to="/login"
                    >
                      Sign in here
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
                    Sign up with Google
                  </button>

                  <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6">
                    Or
                  </div>

                  {/* Form */}
                  <form onSubmit={handleManualSignUp}>
                    <div className="grid gap-y-4">
                      {/* Form Group */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm mb-2 text-gray-400"
                        >
                          Email address
                        </label>
                        <div className="relative">
                          <input
                            style={{ backgroundColor: "white" }}
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm text-black focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            aria-describedby="email-error"
                          />
                          <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg
                              className="h-5 w-5 text-gray-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="00 16 16"
                              aria-hidden="true"
                            >
                              {/*... (no changes) */}
                            </svg>
                          </div>
                        </div>
                        <p
                          className="hidden text-xs text-gray-600 mt-2"
                          id="email-error"
                        >
                          Please include a valid email address so we can get
                          back to you
                        </p>
                      </div>
                      {/* End Form Group */}

                      {/* Form Group */}
                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm mb-2 text-gray-400"
                        >
                          Password
                        </label>
                        <div className="relative">
                          <input
                            style={{ backgroundColor: "white" }}
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                            className="text-black py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            aria-describedby="password-error"
                          />
                          <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                            <svg
                              className="h-5 w-5 text-gray-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              {/*... (no changes) */}
                            </svg>
                          </div>
                        </div>
                        <p
                          className="hidden text-xs text-gray-400 mt-2 "
                          id="password-error"
                        >
                          8+ characters requigray
                        </p>
                      </div>
                      {/* End Form Group */}

                      {/* Form Group */}
                      <div>
                        <label
                          htmlFor="confirm-password"
                          className="block text-sm mb-2 text-gray-400"
                        >
                          Confirm Password
                        </label>
                        <div className="relative">
                          <input
                            style={{ backgroundColor: "white" }}
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            value={confirmPassword}
                            onChange={(event) =>
                              setConfirmPassword(event.target.value)
                            }
                            className="text-black py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            aria-describedby="confirm-password-error"
                          />
                          <div className="hidden absolute inset-y-0 end-0 items-center pointer-events-none pe-3">
                            <svg
                              className="h-5 w-5 text-gray-500"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              aria-hidden="true"
                            >
                              {/*... (no changes) */}
                            </svg>
                          </div>
                        </div>
                        <p
                          className="hidden text-xs text-gray-600 mt-2"
                          id="confirm-password-error"
                        >
                          Password does not match the password
                        </p>
                      </div>
                      {/* End Form Group */}

                      {/* Checkbox */}
                      <div className="flex items-center">
                        <div className="flex">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="shrink-0 mt-0.5 border-gray-200 rounded text-white pointer-events focus:ring-blue-500"
                          />
                        </div>
                        <div className="ms-3">
                          <label
                            htmlFor="remember-me"
                            className="text-sm text-gray-400"
                          >
                            I accept the{" "}
                            <a
                              className="text-gray-400 decoration-2 hover:underline font-medium"
                              href="#"
                            >
                              Terms and Conditions
                            </a>
                          </label>
                        </div>
                      </div>
                      {/* End Checkbox */}

                      <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-700 text-gray-200 hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none"
                      >
                        Sign up
                      </button>
                    </div>
                  </form>
                  {/* End Form */}

                  {error && (
                    <p className="text-xs text-red-600 mt-2">{error}</p>
                  )}
                  {success && (
                    <p className="text-xs text-green-600 mt-2">
                      {success}
                      <Link
                        className="text-green-600 decoration-2 hover:underline font-medium ml-1"
                        to={`/verify-email?token=${verificationToken}&email=${email}`}
                      >
                        Verify email
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
