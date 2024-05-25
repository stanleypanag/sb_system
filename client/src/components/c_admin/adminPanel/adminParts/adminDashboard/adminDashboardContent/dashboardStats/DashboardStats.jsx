import React from "react";

const DashboardStats = () => {
  return (
    <>
      {/* <!-- Card Section --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* <!-- Card --> */}
          <div className="flex flex-col justify-center gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl">
            <div className="inline-flex justify-center items-center">
              <span className="size-2 inline-block bg-green-500 rounded-full me-2"></span>
              <span className="text-xs font-semibold uppercase text-gray-600">
                USERS
              </span>
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">
                150
              </h3>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="flex flex-col justify-center gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl">
            <div className="inline-flex justify-center items-center">
              <span className="size-2 inline-block bg-blue-500 rounded-full me-2"></span>
              <span className="text-xs font-semibold uppercase text-gray-600">
                RESOLUTIONS
              </span>
            </div>

            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">
                25
              </h3>
            </div>
          </div>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <div className="flex flex-col justify-center gap-y-3 lg:gap-y-5 p-4 md:p-5 bg-white border shadow-sm rounded-xl">
            <div className="inline-flex justify-center items-center">
              <span className="size-2 inline-block bg-blue-500 rounded-full me-2"></span>
              <span className="text-xs font-semibold uppercase text-gray-600">
                ORDINANCES
              </span>
            </div>

            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">
                4
              </h3>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}
      </div>
      {/* <!-- End Card Section --> */}
    </>
  );
};

export default DashboardStats;
