import React from "react";
import PropTypes from "prop-types";

const RecentDocsTemp = (props) => {
  return (
    <div className="flex flex-col bg-white shadow-sm rounded-lg">
      <div className="bg-gray-800 border-b py-3 px-4 md:py-4 md:px-5 rounded-tl-lg rounded-tr-lg flex justify-between">
        <p className="mt-1 text-sm text-white uppercase">
          {props.doc_type + " No. " + props.doc_num}
        </p>
        <p className="mt-1 text-sm text-white">
          {"S.Y. " + props.doc_series_yr}
        </p>
      </div>
      <div className="p-4 md:p-5">
        <h1 className="text-sm text-gray-600 font-light">{props.doc_title}</h1>
        <a
          className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none"
          href="#"
        >
          View Document
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

RecentDocsTemp.protoTypes = {
  resolutionNum: PropTypes.string,
  resolutionTitle: PropTypes.string,
  resolutionContent: PropTypes.string,
};

export default RecentDocsTemp;
