import React from "react";

const RecentDocs = () => {
  return (
    <>
      <div>
        {/* <!-- Card Blog --> */}

        <div className="max-w-[85rem] px-10 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid lg:grid-cols-4 lg:gap-y-16 gap-10">

            {/* <!--Resolution Card --> */}
            <div className="flex flex-col bg-white border border-gray-400 shadow-sm">
              <div className="bg-red-800 border-b py-3 px-4 md:py-4 md:px-5">
                <p className="mt-1 text-sm text-white">
                  Resolution No. 1
                </p>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">
                  Card title
                </h3>
                <p className="mt-2 text-gray-500">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!--Resolution End Card --> */}
            
            {/* <!--Ordinance Card --> */}
            <div className="flex flex-col bg-white border border-gray-400 shadow-sm">
              <div className="bg-green-800 border-b py-3 px-4 md:py-4 md:px-5">
                <p className="mt-1 text-sm text-white">
                  Ordinance No. 1
                </p>
              </div>
              <div className="p-4 md:p-5">
                <h3 className="text-lg font-bold text-gray-800">
                  Card title
                </h3>
                <p className="mt-2 text-gray-500">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a
                  className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-green-600 hover:text-green-800 disabled:opacity-50 disabled:pointer-events-none"
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
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!--Ordinance End Card --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Card Blog --> */}
      </div>
    </>
  );
};

export default RecentDocs;
