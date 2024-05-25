import React from "react";

const DashboardBase64Table = () => {
  return (
    <>
      <div className="-m-1.5 overflow-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="flex justify-center items-center h-[5vh] bg-gray-800">
            <h1 className="text-white font-sans">BASE64 LIST</h1>
          </div>
          <div className="overflow-hidden">
            <div className="table border-collapse table-auto w-full divide-y divide-gray-200">
              <div className="table-header-group bg-gray-800">
                <div className="table-row">
                  <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    ID
                  </div>
                  <div className="table-cell px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                    Base64 File
                  </div>
                  <div className="table-cell px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">
                    ACTION
                  </div>
                </div>
              </div>
              <div className="table-row-group divide-y divide-gray-200 bg-white">
                <div className="table-row">
                  <div className="table-cell px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    Joe Black
                  </div>
                  <div className="table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    JSON file
                  </div>
                  <div className="table-cell px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Make a PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardBase64Table;
