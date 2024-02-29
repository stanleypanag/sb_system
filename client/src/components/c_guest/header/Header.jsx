import React from "react";
import {Link, useNavigate} from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./header.css";

const Header = () => {
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
              <p class="inline-block text-xs text-gray-400">
                Want to download a copy?
              </p>

              <div className="auth-link flex justify-center items-center">
                <Link
                  class="py-2 px-3 h-[1.5rem] inline-flex items-center rounded-full gap-x-1 text-xs font-semibold border border-gray-400 bg-gray-800 text-gray-400 disabled:opacity-50 disabled:pointer-events-none"
                  to={"/login"}
                >
                  sign in
                </Link>
                <div className="divider divider-horizontal font-bold text-xs text-gray-400 mx-2">
                  or
                </div>
                <Link
                  class="py-2 px-3 h-[1.5rem] inline-flex items-center rounded-full gap-x-1 text-xs font-semibold border border-gray-400 bg-gray-800 text-gray-400 disabled:opacity-50 disabled:pointer-events-none"
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
                <h1 className="tracking-widest uppercase font-bold text-gray-200 text-sm order-2 font-poppins">
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
      <header class="flex flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-gray-700 text-sm sm:pb-0">
        <nav
          class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 py-5"
          aria-label="Global"
        >
          <div class="order-1 flex items-center justify-between">
            <div className="join border border-gray-400 rounded-full border-2">
              <div>
                <div>
                  <input
                    className="search input w-[17rem] input-bordered join-item rounded-tl-full rounded-bl-full bg-gray-200"
                    placeholder="eg.,year, title, reso no., ord. no."
                  />
                </div>
              </div>
              <select className="filter select select-bordered join-item w-30 bg-gray-800 text-white">
                <option
                  disabled
                  className="text-white font-bold dark:text-white uppercase"
                >
                  Select Docs
                </option>
                <option className="text-gray-200">Resolution</option>
                <option className="text-gray-200">Ordinance</option>
              </select>
              <div className="indicator">
                <button className="btn join-item bg-gray-800 hover:bg-gray-600 text-white border border-none rounded-tr-full rounded-br-full">
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
            class="order-2 hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <Link to={"/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  fill=""
                  viewBox="0 0 24 24"
                  className="svg"
                >
                  <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"></path>
                </svg>
                <p className="link-text text-center">Home</p>
              </Link>
              <Link to={"/#about"} onClick={handleAboutClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  fill=""
                  className="svg"
                  viewBox="0 0 50 50"
                >
                  <path d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"></path>
                </svg>
                <p className="link-text text-center">About</p>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- ========== END HEADER ========== --> */}
    </>
  );
};

export default Header;
