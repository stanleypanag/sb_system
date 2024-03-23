import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./headerGuest.css";

const HeaderGuest = () => {
  const navigate = useNavigate();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({behavior: "smooth"});
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(scrollToAbout, 100);
  };

  return (
    <>
      {/* <!-- Announcement Banner --> */}
      <div class="bg-gray-800">
        <div class="max-w-[85rem] px-4 py-7 sm:px-6 lg:px-8 mx-auto">
          {/* <!-- Grid --> */}
          <div class="grid justify-center md:grid-cols-2 md:justify-between gap-2">
            <div class="gap-2 text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
              <p class="inline-block text-xs text-gray-300">
                Want to download a copy?
              </p>

              <div className="auth-link flex justify-center items-center">
                <Link
                  class="py-2 px-3 h-[1.5rem] inline-flex items-center rounded-full gap-x-1 text-xs font-semibold border border-gray-400 bg-gray-100 text-gray-900 disabled:opacity-50 disabled:pointer-events-none"
                  to={"/login"}
                >
                  sign in
                </Link>
                <div className="divider divider-horizontal font-bold text-xs text-gray-200 mx-2">
                  or
                </div>
                <Link
                  class="py-2 px-3 h-[1.5rem] inline-flex items-center rounded-full gap-x-1 text-xs font-semibold border border-gray-400 bg-gray-100 text-gray-900 disabled:opacity-50 disabled:pointer-events-none"
                  to={"/register"}
                >
                  sign up
                </Link>
              </div>
            </div>
            {/* <!-- End Col --> */}

            <div class="brand-logo flex items-center order-1">
              <Link
                class="inline-flex items-center gap-x-4 text-xl font-semibold"
                to={"/"}
              >
                <img class="w-[3rem] h-auto order-1" src={Logo} alt="Logo" />
                <h1 className="tracking-widest uppercase font-bold text-gray-200 text-xs order-2 font-poppins">
                  Naic Cavite Resolutions and Ordinances
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
      <header class="flex flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-gray-900 bg-opacity-25 text-sm sm:pb-0 absolute">
        <nav
          class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 py-5"
          aria-label="Global"
        >
          <div class="order-1 flex items-center justify-between">
            <div className="join border-2 border-gray-900">
              <div>
                <div>
                  <input
                    className="search input w-[17rem] join-item bg-gray-200"
                    placeholder="eg.,year, title, reso no., ord. no."
                  />
                </div>
              </div>
              <select className="select join-item w-25 bg-gray-800 text-white focus:outline-none">
                <option
                  disabled
                  className="text-white font-bold dark:text-white"
                >
                  Select Docs
                </option>
                <option className="text-gray-200">Resolution</option>
                <option className="text-gray-200">Ordinance</option>
              </select>
              <div className="indicator">
                <button className="btn join-item bg-gray-800 hover:bg-gray-600 text-white border border-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-100"
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
            class="order-2 hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <Link to={"/"}>
                <p className="link-text tracking-widest text-white text-xs text-center font-bold">
                  Home
                </p>
              </Link>

              <Link to={"/#about"} onClick={handleAboutClick}>
                <p className="link-text tracking-widest text-white text-xs text-center font-bold">
                  About
                </p>
              </Link>

              <Link to={"/resolution"}>
                <p className="link-text tracking-widest text-white text-xs text-center font-bold">
                  Resolutions
                </p>
              </Link>

              <Link to={"/ordinance"}>
                <p className="link-text tracking-widest text-white text-xs text-center font-bold">
                  Ordinances
                </p>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- ========== END HEADER ========== --> */}
    </>
  );
};

export default HeaderGuest;
