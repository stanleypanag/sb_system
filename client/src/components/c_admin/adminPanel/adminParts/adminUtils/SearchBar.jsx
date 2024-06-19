import React, { useState } from "react";

const SearchBar = ({ data, renderTableRows = () => null }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((user) => {
    const email = user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const isAdmin = user.is_admin.toString().includes(searchTerm.toLowerCase());
    return email || isAdmin;
  });

  return (
    <div>
      <div className="relative max-w-xs">
        <label className="sr-only">Search</label>
        <input
          type="text"
          name="hs-table-with-pagination-search"
          id="hs-table-with-pagination-search"
          className="bg-white py-2 px-3 ps-9 block w-full border border-gray-600 shadow-sm rounded-lg text-sm text-black focus:z-10 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Search for users"
          value={searchTerm}
          onChange={handleSearch}
        />

        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
          <svg
            className="size-4 text-gray-400"
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
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
      </div>

      {/* Render the filtered data */}
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
            >
              Role
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredData.map((user) => renderTableRows(user))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchBar;
