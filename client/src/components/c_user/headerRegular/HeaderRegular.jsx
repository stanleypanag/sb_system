import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../../../supabase/supabase.js"; // Adjust the import path if necessary
import Logo from "../../assets/logo.png";
import "./headerRegular.css";

const HeaderRegular = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [docType, setDocType] = useState("Resolution");

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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(scrollToAbout, 100);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error);
    } else {
      navigate("/login"); // Navigate to the login page after successful logout
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleDocTypeChange = (e) => {
    setDocType(e.target.value);
  };

  const handleSearch = () => {
    if (docType === "Resolution") {
      navigate(`/resolution?search=${searchValue}`);
    } else if (docType === "Ordinance") {
      navigate(`/ordinance?search=${searchValue}`);
    }
  };

  return (
    <>
      <div className="bg-gray-800">
        <div className="max-w-[85rem] px-4 py-7 sm:px-6 lg:px-8 mx-auto">
          <div className="grid justify-center md:grid-cols-2 md:justify-between gap-2">
            <div className="gap-2 text-center md:text-start md:order-2 md:flex md:justify-end md:items-center">
              <div className="user-profile items-center gap-4 border-2 border-gray-200 bg-gray-200 rounded-full px-5 relative">
                {userEmail && (
                  <div>
                    <h1 className="text-sm text-gray-900 flex flex-row gap-1 items-center">
                      USER:
                      <p className="font-bold text-xs text-gray-900">
                        {userEmail}
                      </p>
                    </h1>
                  </div>
                )}
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                    onClick={toggleDropdown}
                  >
                    <div className="w-10 rounded-full">
                      <svg
                        viewBox="0 0 24 24"
                        fill="gray"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z"
                            fill="black"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52 divide-y-2"
                  >
                    <li>
                      <a onClick={handleLogout}>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="brand-logo flex items-center order-1">
              <Link
                className="inline-flex items-center gap-x-4 text-xl font-semibold"
                to={"/"}
              >
                <img
                  className="w-[3rem] h-auto order-1"
                  src={Logo}
                  alt="Logo"
                />
                <h1 className="tracking-widest uppercase font-bold text-gray-100 text-xs order-2 font-poppins">
                  Naic Cavite Resolutions and Ordinances
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header className="flex flex-wrap sm:justify-start sm:flex-col z-50 w-full bg-gray-900 bg-opacity-50 text-sm sm:pb-0 absolute">
        <nav
          className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 py-5"
          aria-label="Global"
        >
          <div className="order-1 flex items-center justify-between">
            <div className="join border-2 border-gray-800">
              <div>
                <div>
                  <input
                    className="search input w-[17rem] join-item bg-gray-200"
                    placeholder="eg.,year, title, reso no., ord. no."
                    value={searchValue}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <select
                className="select join-item w-25 bg-gray-800 text-white focus:outline-none"
                value={docType}
                onChange={handleDocTypeChange}
              >
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
                <button
                  className="btn join-item bg-gray-800 hover:bg-gray-600 text-white border-0"
                  onClick={handleSearch}
                >
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

            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle size-10 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 bg-white disabled:opacity-50 disabled:pointer-events-none"
                aria-label="toggle navigation"
                onClick={toggleDropdown}
              >
                {isDropdownOpen ? (
                  <svg
                    className="hs-collapse-open:block hidden flex-shrink-0 size-4"
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
                ) : (
                  <svg
                    className="hs-collapse-open:hidden flex-shrink-0 size-4"
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
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* MOBILE VIEW */}
          <div
            id="navbar-collapse-with-animation"
            className={`order-2 overflow-hidden transition-all duration-300 basis-full grow sm:block ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <div className="user-profile-nav border border-white bg-gray-300 rounded-full text-gray-800 font-bold lg:hidden md:hidden  flex flex-row md:flex-col items-center justify-center gap-4">
                <div>
                  <h1 className="flex flex-row gap-1">
                    USER:
                    <p className="text-gray-700 font-bold">{userEmail}</p>
                  </h1>
                </div>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <svg
                        viewBox="0 0 24 24"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z"
                            fill="black"
                          ></path>{" "}
                        </g>
                      </svg>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a
                        className="text-gray-900 text-xs"
                        onClick={handleLogout}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

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
    </>
  );
};

export default HeaderRegular;
