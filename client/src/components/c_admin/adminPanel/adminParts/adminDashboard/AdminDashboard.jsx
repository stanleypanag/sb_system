import React from "react";
import {
  DashboardStats,
  DashboardBase64Table,
} from "./adminDashboardContent/index";

const AdminDashboard = () => {
  return (
    <>
      <div>
        <DashboardStats />
        <div className="p-10 justify-center gap-10">
          <DashboardBase64Table />
        </div>
        {/* DEVELOPER COMMENT */}
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-row pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-red-900">
            <span className="flex-shrink-0 inline-flex mx-3 item-center justify-center leadi rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <div className="flex-1 p-2">
              <p className="text-sm text-gray-400">
                NOTES: when "Make a PDF" triggers, it will show a loading
                screen. This indicates that backend process is happening.
              </p>
            </div>
            <button
              type="button"
              className="ml-6 p-2 dark:text-gray-400"
            ></button>
          </div>
          <div className="flex flex-row pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-red-900">
            <span className="flex-shrink-0 inline-flex mx-3 item-center justify-center leadi rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <div className="flex-1 p-2">
              <p className="text-sm text-gray-400">
                The Process includes converting base64 to PDF and perform OCR to
                the PDF
              </p>
            </div>
            <button
              type="button"
              className="ml-6 p-2 dark:text-gray-400"
            ></button>
          </div>
          <div className="flex flex-row pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-red-900">
            <span className="flex-shrink-0 inline-flex mx-3 item-center justify-center leadi rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <div className="flex-1 p-2">
              <p className="text-sm text-gray-400">
                After the process it will show a "Success" message in form of a
                modal
              </p>
            </div>
            <button
              type="button"
              className="ml-6 p-2 dark:text-gray-400"
            ></button>
          </div>
          <div className="flex flex-row pl-4 py-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-red-900">
            <span className="flex-shrink-0 inline-flex mx-3 item-center justify-center leadi rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <div className="flex-1 p-2">
              <p className="text-sm text-gray-400">
                After the process, the documents as well as its data should be
                shown in the table of their respective doc type table
              </p>
            </div>
            <button
              type="button"
              className="ml-6 p-2 dark:text-gray-400"
            ></button>
          </div>
        </div>
        {/*DEV COMMENT END */}
      </div>
    </>
  );
};

export default AdminDashboard;
