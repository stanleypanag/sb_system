import React from "react";
import logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-900 w-full">
        <div class="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          {/* <!-- Grid --> */}
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div class="col-span-full lg:col-span-1">
              <a
                class="flex justify-center items-center text-xl font-semibold text-white"
                href="#"
                aria-label="Brand"
              >
                <img className="w-10" src={logo} />
                <p className="ml-3">SB Naic Office</p>
              </a>
            </div>
            {/* <!-- End Col --> */}

            <div class="col-span-1">
              <h4 class="font-semibold text-gray-100">Documents</h4>

              <div class="mt-3 grid space-y-3">
                <p>
                  <a
                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Resolutions
                  </a>
                </p>
                <p>
                  <a
                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Ordinances
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div class="col-span-1">
              <h4 class="font-semibold text-gray-100">Learn More</h4>

              <div class="mt-3 grid space-y-3">
                <p>
                  <a
                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Wikipedia
                  </a>
                </p>
                <p>
                  <a
                    class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                    href="#"
                  >
                    Facebook
                  </a>
                </p>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div class="col-span-2">
              <h4 class="font-semibold text-gray-100">Sent Us your Feedback</h4>

              <form>
                <div class="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-gray-500 rounded-lg p-2">
                  <div class="w-full">
                    <label for="hero-input" class="sr-only">
                      Send Feedback
                    </label>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      class="py-3 px-4 block w-full border-transparent rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Enter your message"
                    />
                  </div>
                  <a
                    class="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Send
                  </a>
                </div>
              </form>
            </div>
            {/* <!-- End Col --> */}
          </div>
          {/* <!-- End Grid --> */}

          <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
            <div class="flex justify-between items-center">
              <p class="text-sm text-gray-400">
                © 2024 Sangguniang Bayan ng Naic. All rights reserved.
              </p>
            </div>
            {/* <!-- End Col --> */}

            {/* <!-- Social Brands --> */}
            <div>
              <a
                class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="https://www.facebook.com/municipalityofnaic"
              >
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a
                class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"
                href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbttwKFrXJcRHWHnXkDxWCrZcnlMCpmVzvlmTWXRsMJvDDzlGskBpptLbxfkjKfBtSTKDs"
              >
                <svg
                  class="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
              </a>
            </div>
            {/* <!-- End Social Brands --> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
