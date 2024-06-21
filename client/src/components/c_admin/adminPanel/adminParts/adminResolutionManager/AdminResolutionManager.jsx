import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Error from "../../../../assets/Error.png";
import Close from "../../../../assets/Close.png";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AdminResolutionManager = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingResolution, setEditingResolution] = useState(null);
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({});

  //pdf modal viewer
  const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

  const {
    isLoading,
    error,
    data: resolutions,
  } = useQuery({
    queryKey: ["documents", "resolutions"],
    queryFn: () =>
      fetch(`http://${BASE_URL}/api/documents/resolution/`).then((res) =>
        res.json()
      ),
  });

  const deleteResolutionMutation = useMutation({
    mutationFn: (docId) =>
      fetch(`http://${BASE_URL}/api/documents/${docId}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["documents", "resolutions"]);
    },
  });

  const { mutate } = useMutation({
    mutationFn: () => {
      const formDataToSend = new FormData();
      formDataToSend.append("doc_type", formData.doc_type);
      formDataToSend.append("doc_number", formData.doc_number);
      formDataToSend.append("doc_series_yr", formData.doc_series_yr);
      formDataToSend.append("doc_title", formData.doc_title);
      formDataToSend.append("doc_pdf", formData.doc_pdf);

      console.log(formData);
      console.log("Request payload:", formDataToSend);
      return fetch(
        `http://${BASE_URL}/api/documents/${editingResolution.doc_id}`,
        {
          method: "PUT",
          body: formDataToSend,
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["documents", "resolutions"]);
      setEditingResolution(null);
      setIsModalOpen(false);
    },
    onError: (error, variables, context) => {
      console.error("Error updating document:", error);
      alert(
        "An error occurred while updating the document. Please try again later."
      );
    },
  });

  const handleOpenModal = (resolution) => {
    setEditingResolution(resolution);
    setFormData({
      doc_type: resolution.doc_type || "",
      doc_title: resolution.doc_title || "",
      doc_number: resolution.doc_number || "",
      doc_series_yr: resolution.doc_series_yr || "",
      doc_file_path: resolution.doc_file_path || null,
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setEditingResolution(null);
    setIsModalOpen(false);
  };

  const handleClose = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate(formData);
    handleClose();
  };

  // PDF modal Handler
  const handleOpenPdfModal = (pdfUrl) => {
    setSelectedPdfUrl(pdfUrl);
    setIsPdfModalOpen(true);
  };
  const handleClosePdfModal = () => {
    setSelectedPdfUrl(null);
    setIsPdfModalOpen(false);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-[83vw] h-[100vh]">
        <h1 className="text-white text-xl mr-5 font-bold">Loading...</h1>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-white"></div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center w-[83vw] h-[100vh]">
        <img src={Error} />
        <div>
          <h1 className="text-white text-xl mr-5 font-bold">
            Error Loading Data!
          </h1>
          <p className="text-gray-500">Can't reach the server!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-gray-900 flex justify-center items-center h-[10vh]">
              <h1 className="text-gray-200">RESOLUTION TABLE MANAGER</h1>
            </div>
            <div className="divide-y bg-white divide-gray-200">
              {/* SEARCH FEATURE */}
              {/* <div className="py-3 px-4">
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
                      className="size-4 text-gray-400 "
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
              </div> */}
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 ">
                  <thead className="bg-gray-50 ">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                      >
                        TITLE
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                      >
                        DOCS No.
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                      >
                        SERIES YEAR
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase "
                      >
                        PDF file
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase "
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {resolutions.data.map((resolution) => (
                      <tr key={resolution.doc_id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          {resolution.doc_id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-wrap text-justify">
                          {resolution.doc_title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          {resolution.doc_number}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          {resolution.doc_series_yr}
                        </td>
                        <td className="py-4 whitespace-nowrap text-wrap text-sm text-gray-800">
                          <a
                            href="#"
                            className="text-blue-600 hover:text-blue-800 underline"
                            onClick={(e) => {
                              e.preventDefault();
                              handleOpenPdfModal(resolution.doc_file_url);
                            }}
                          >
                            {resolution.doc_file_name}
                          </a>
                        </td>
                        <td className="px-6 flex gap-3 whitespace-nowrap justify-end">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={() =>
                              deleteResolutionMutation.mutate(resolution.doc_id)
                            }
                          >
                            Delete
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
                            onClick={() => handleOpenModal(resolution)}
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
          id="hs-modal-editResolution"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-green-950/90"
        >
          <div className="bg-white border shadow-sm rounded-xl w-full max-w-lg p-4 m-3">
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h3 className="font-bold text-gray-800">Edit Resolution</h3>
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
              <form>
                {/* <!-- Section --> */}
                <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
                  <div className="mt-2 space-y-3">
                    <input
                      id="af-payment-billing-contact"
                      type="text"
                      value={formData.doc_title}
                      name="doc_title"
                      onChange={(e) =>
                        setFormData({ ...formData, doc_title: e.target.value })
                      }
                      className="py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Edit Title"
                    />
                    <input
                      type="text"
                      value={formData.doc_number}
                      name="doc_number"
                      onChange={(e) =>
                        setFormData({ ...formData, doc_number: e.target.value })
                      }
                      className="py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Edit Resolution Number"
                    />
                    <input
                      type="text"
                      value={formData.doc_series_yr}
                      name="doc_series_yr"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          doc_series_yr: e.target.value,
                        })
                      }
                      className="py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Edit Series Year"
                    />
                    <input
                      type="hidden"
                      value={formData.doc_type}
                      name="doc_type"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          doc_type: e.target.value,
                        })
                      }
                      className="py-2 px-3 pe-11 block w-full border border-gray-300 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Edit Doc Type"
                    />

                    <label htmlFor="small-file-input" className="sr-only">
                      Choose file
                    </label>
                    <input
                      type="file"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          doc_pdf: e.target.files[0],
                        })
                      }
                      name="doc_pdf"
                      id="small-file-input"
                      className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-2 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}

      {isPdfModalOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center">
          <div className="bg-white border shadow-sm rounded-xl w-[80vw] p-4 m-3">
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h3 className="font-bold text-gray-800">View PDF</h3>
              <button
                type="button"
                className="flex justify-center items-center size-7 text-sm font-semibold text-gray-800 disabled:opacity-50 disabled:pointer-events-none mr-10"
                onClick={handleClosePdfModal}
              >
                <p className="text-red-500">Close</p>
                <img src={Close} />
              </button>
            </div>
            <div className="p-4">
              {selectedPdfUrl && (
                <object
                  data={selectedPdfUrl}
                  type="application/pdf"
                  className="w-full h-[80vh]"
                  title="PDF Viewer"
                >
                  <p>Document PDF not Available!</p>
                </object>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminResolutionManager;
