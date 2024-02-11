import React from "react";
import logo from '../../../assets/logo.png'

const Hero = () => {
  return (
    <div>
      {/* <!-- Hero --> */}
      <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">

         <img className="flex m-auto w-50 mb-10" src={logo} alt="SBlogo"/>

          <div className="text-center">

            <h1 className="text-4xl sm:text-6xl font-bold text-gray-800">
              Sangguniang Bayan
            </h1>

            <p className="mt-3 text-gray-600">
              Search for Naic-Cavite Resolutions and Ordinances.
            </p>

            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              {/* <!-- Form --> */}
              <form>
                <div className="relative z-10 flex space-x-3 p-3 bg-white border border-black rounded-lg shadow-lg shadow-gray-100">
                  <div className="flex-[1_0_0%]">
                    <label
                      for="hs-search-article-1"
                      className="block text-sm text-gray-700 font-medium"
                    >
                      <span className="sr-only">Search Resolutions and Ordinances</span>
                    </label>
                    <input
                      type="article"
                      name="hs-search-article-1"
                      id="hs-search-article-1"
                      className="searchbox py-2.5 px-4 block w-full border-transparent rounded-lg dark:bg-white"
                      placeholder="Search Resolutions and Ordinances"
                    />
                  </div>
                  <div className="flex-[0_0_auto]">
                    <a
                      className="w-[46px] h-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-red-700 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="red"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </form>
              {/* <!-- End Form --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero --> */}
    </div>
  );
};

export default Hero;
