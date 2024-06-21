import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import SuccessBanner from "../adminUtils/SuccessBanner";
import SearchBarEvent from "../adminUtils/SearchBarEvent";
import formatTimeToPH from "../adminUtils/dateFormatter.js";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const AdminEventLogs = () => {
  const q1client = useQueryClient();

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);

  const {
    isLoading,
    error,
    data: eventLogs,
  } = useQuery({
    queryKey: ["events", "eventLogs"],
    queryFn: () =>
      fetch(`http://${BASE_URL}/api/event-logs`).then((res) => res.json()),
  });

  const deleteEventMutation = useMutation({
    mutationFn: (id) =>
      fetch(`http://${BASE_URL}/api/event-logs/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      q1client.invalidateQueries(["events", "eventLogs"]);
      setShowSuccessBanner(true);
    },
  });

  const handleDeleteEvent = async (id, eventType, eventDescription) => {
    setIsDeleteModalOpen(true);
    setSelectedEvent({
      id: id,
      event_type: eventType,
      event_description: eventDescription,
    });
  };

  const handleConfirmDelete = () => {
    deleteEventMutation.mutate(selectedEvent.id);
    setIsDeleteModalOpen(false);
    setSelectedEvent(null);
  };

  const handleCancelDelete = () => {
    setIsDeleteModalOpen(false);
    setSelectedEvent(null);
  };

  const handleCloseSuccessBanner = () => {
    setShowSuccessBanner(false); // Close the success banner
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
          <p>Can't reach the server!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-20">
      {showSuccessBanner && (
        <SuccessBanner
          message="You have successfully deleted event log." // Example message
          onClose={handleCloseSuccessBanner}
        />
      )}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-gray-900 flex justify-center items-center h-[10vh]">
              <h1 className="text-gray-200">EVENT LOGS</h1>
            </div>
            <div className="divide-y bg-white divide-gray-200">
              <div className="py-3 px-4">
                <SearchBarEvent
                  data={eventLogs?.data || []}
                  renderTableRows={(event) => (
                    <tr key={event.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                        {formatTimeToPH(event.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                        {event.event_type}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-wrap text-justify">
                        {event.event_description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                        {event.user_email}
                      </td>
                      <td className="px-6 py-4 flex gap-3 whitespace-nowrap text-sm font-medium">
                        <button
                          type="button"
                          className="inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-800 hover:text-red-600 disabled:opacity-50 disabled:pointer-events-none"
                          onClick={() =>
                            handleDeleteEvent(
                              event.id,
                              event.event_type,
                              event.event_description
                            )
                          }
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isDeleteModalOpen && selectedEvent && (
        <div
          id="hs-modal-deleteEvent"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-gray-950/90"
        >
          <div className="bg-white border shadow-sm rounded-xl w-full max-w-lg p-4 m-3">
            <div className="flex justify-between items-center py-3 px-4 border-b">
              <h3 className="font-bold text-gray-800">
                Are you sure you want to delete this Log?
              </h3>
              <button
                type="button"
                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleCancelDelete}
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
              <div className="flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 45.311 45.311"
                  fill="maroon"
                  stroke="white"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <g>
                    <path
                      d="M22.675,0.02c-0.006,0-0.014,0.001-0.02,0.001c-0.007,0-0.013-0.001-0.02-0.001C10.135,0.02,0,10.154,0,22.656
                c0,12.5,10.135,22.635,22.635,22.635c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0c12.5,0,22.635-10.135,22.635-22.635
                C45.311,10.154,35.176,0.02,22.675,0.02z M22.675,38.811c-0.006,0-0.014-0.001-0.02-0.001c-0.007,0-0.013,0.001-0.02,0.001
                c-2.046,0-3.705-1.658-3.705-3.705c0-2.045,1.659-3.703,3.705-3.703c0.007,0,0.013,0,0.02,0c0.006,0,0.014,0,0.02,0
                c2.045,0,3.706,1.658,3.706,3.703C26.381,37.152,24.723,38.811,22.675,38.811z M27.988,10.578
                c-0.242,3.697-1.932,14.692-1.932,14.692c0,1.854-1.519,3.356-3.373,3.356c-0.01,0-0.02,0-0.029,0c-0.009,0-0.02,0-0.029,0
                c-1.853,0-3.372-1.504-3.372-3.356c0,0-1.689-10.995-1.931-14.692C17.202,8.727,18.62,5.29,22.626,5.29
                c0.01,0,0.02,0.001,0.029,0.001c0.009,0,0.019-0.001,0.029-0.001C26.689,5.29,28.109,8.727,27.988,10.578z"
                    />
                  </g>
                </svg>
              </div>

              <p className="text-gray-800">
                This action cannot be undone. Are you sure you want to
                permanently delete
                <strong>
                  "{selectedEvent.event_type}: {selectedEvent.event_description}
                  "
                </strong>
                ?
              </p>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
                onClick={handleConfirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEventLogs;
