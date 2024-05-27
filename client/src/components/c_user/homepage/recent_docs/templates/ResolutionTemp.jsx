import React from "react";
import PropTypes from "prop-types";

const ResolutionTemp = (props) => {
  return (
    <div className="flex flex-col bg-white shadow-sm rounded-lg">
      <div className="bg-gray-800 border-b py-3 px-4 md:py-4 md:px-5 rounded-tl-lg rounded-tr-lg">
        <p className="mt-1 text-sm text-white">{props.resolutionNum}</p>
      </div>
      <div className="p-4 md:p-5">
        <h1 className="text-sm text-gray-800 font-semibold">
          {props.resolutionTitle}
        </h1>
        <a
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          Card link
          <svg
            className="flex-shrink-0 w-4 h-4"
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
    </div>
  );
};

ResolutionTemp.protoTypes = {
  resolutionNum: PropTypes.string,
  resolutionTitle: PropTypes.string,
  resolutionContent: PropTypes.string,
};

export default ResolutionTemp;
