import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const AdminUserManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUserRole, setEditingUserRole] = useState(null);
  const [formData, setFormData] = useState({});
  const queryClient = useQueryClient();

  // Fetch all users
  const {
    isLoading,
    error,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("http://192.168.1.10:5000/api/users");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  // Mutation for updating user role
  const updateRoleMutation = useMutation({
    mutationFn: async ({ userId, isAdmin }) => {
      const formDataToSend = new FormData();
      formDataToSend.append("user_id", userId);
      formDataToSend.append("is_admin", isAdmin);

      const response = await fetch(
        `http://192.168.1.10:5000/api/users/${userId}`,
        {
          method: "PUT",
          body: formDataToSend,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update user role");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      setEditingUserRole(null);
      setIsModalOpen(false);
    },
    onError: (error) => {
      console.error("Error updating user role:", error);
      alert(
        "An error occurred while updating user role. Please try again later."
      );
    },
  });

  // Handle modal open
  const handleOpenModal = (user) => {
    setEditingUserRole(user);
    setFormData({ user_id: user.user_id, is_admin: user.is_admin });
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setEditingUserRole(null);
    setIsModalOpen(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    updateRoleMutation.mutate({
      userId: formData.user_id,
      isAdmin: e.target.elements.is_admin.checked,
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="p-20">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-gray-900 flex justify-center items-center h-[10vh]">
              <h1 className="text-gray-200">USER TABLE MANAGER</h1>
            </div>
            <div className="divide-y bg-white divide-gray-200">
              <div className="py-3 px-4">
                <div className="relative max-w-xs">
                  <label className="sr-only">Search</label>
                  <input
                    type="text"
                    name="hs-table-with-pagination-search"
                    id="hs-table-with-pagination-search"
                    className="bg-white py-2 px-3 ps-9 block w-full border border-gray-600 shadow-sm rounded-lg text-sm text-black focus:z-10 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Search for items"
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
              </div>
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                      >
                        Is Admin
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
                    {users.data.map((user) => (
                      <tr key={user.user_id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {user.is_admin !== null
                            ? user.is_admin.toString()
                            : "N/A"}
                        </td>
                        <td className="px-6 py-4 flex gap-3 whitespace-nowrap justify-end text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={() => handleOpenModal(user)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          id="hs-modal-editUser"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-green-950/90"
        >
          <div className="bg-white border shadow-sm rounded-xl w-full max-w-lg p-4 m-3">
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h3 className="font-bold text-gray-800">Edit User Role</h3>
              <button
                type="button"
                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleCloseModal}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  value={formData.user_id}
                  name="user_id"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      user_id: e.target.value,
                    })
                  }
                  className="py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Edit Series Year"
                />
                <input
                  type="hidden"
                  value={formData.email}
                  name="email"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Edit Series Year"
                />
                <label>
                  <input
                    type="checkbox"
                    name="is_admin"
                    defaultChecked={editingUserRole.is_admin}
                  />
                  Is Admin
                </label>
                <div className="mt-4 flex justify-end gap-x-2">
                  <button
                    type="button"
                    className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-semibold bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all text-sm"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-600 text-white shadow-sm align-middle hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all text-sm"
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUserManager;
