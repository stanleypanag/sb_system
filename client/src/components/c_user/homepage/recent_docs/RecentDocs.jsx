import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import OrdinanceTemp from "./templates/ordinanceTemp";
import ResolutionTemp from "./templates/resolutionTemp";

import "./recentDocs.css";

const RecentDocs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  // Reset dropdown state when the component mounts or updates
  useEffect(() => {
    setIsDropdownOpen(false);
  }, [window.location.pathname]); // Use the pathname as a dependency to detect route changes

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <div className="recent-docs pb-10 pt-20">
        <h1 className="text-center pt-20 mb-10 text-2xl text-white uppercase tracking-widest">
          Recently Upload Documents
        </h1>

        {/* <!-- Card Blog --> */}
        <div className="max-w-[85rem] px-10 py-5 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid lg:grid-cols-4 lg:gap-y-16 gap-10">
            {/* FETCH DATA FROM API WILL PASS HERE!! */}

            <ResolutionTemp
              resolutionNum="Resolution No. 10898"
              resolutionTitle="Resolution for me"
              resolutionContent="awjdhakwdgjahwdjagwdavwdhvgawdjvawjdvajwvd."
            />
            <ResolutionTemp
              resolutionNum="Resolution No. 10898"
              resolutionTitle="Resolution for me"
              resolutionContent="awjdhakwdgjahwdjagwdavwdhvgawdjvawjdvajwvd."
            />
            <OrdinanceTemp
              ordinanceNum="Ordinance No. 10898"
              ordinanceTitle="Ordinance for me"
              ordinanceContent="awjdhakwdgjahwdjagwdavwdhvgawdjvawjdvajwvd."
            />
            <OrdinanceTemp
              ordinanceNum="Ordinance No. 10898"
              ordinanceTitle="Ordinance for me"
              ordinanceContent="awjdhakwdgjahwdjagwdavwdhvgawdjvawjdvajwvd."
            />
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Card Blog --> */}

        <div className="hs-dropdown relative inline-flex mx-auto text-center [--trigger:click] mt-10">
          <button
            id="hs-dropdown-hover-event"
            type="button"
            className="hs-dropdown-toggle h-[3rem] py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-tr-full rounded-br-full border-3 border-gray-200 border-l-0 bg-gray-200 text-gray-800 shadow-sm disabled:opacity-50 disabled:pointer-events-none"
            onClick={toggleDropdown}
          >
            See more Documents
            <svg
              className={`size-5 ${isDropdownOpen ? "rotate-180" : ""}`}
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
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            className={`hs-dropdown-menu transition-[opacity,margin] duration ${
              isDropdownOpen ? "opacity-100" : "opacity-0"
            } min-w-90 bg-white shadow-md rounded-lg p-2 mt-2 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full`}
            aria-labelledby="hs-dropdown-hover-event"
          >
            <Link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              to={"/resolution"}
            >
              Resolution
            </Link>
            <Link
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              to={"/ordinance"}
            >
              Ordinance
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentDocs;
