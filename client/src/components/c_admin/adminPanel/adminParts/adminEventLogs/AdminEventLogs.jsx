import React, { useState, useEffect } from "react";
import { supabase } from "../../../../../supabase/supabase";

const AdminEventLogs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventLogs, setEventLogs] = useState([]);

  useEffect(() => {
    const fetchEventLogs = async () => {
      try {
        const { data, error } = await supabase.from("event_logs").select("*");

        console.log(data);

        if (error) {
          console.error("Error fetching data:", error);
          setEventLogs([]);
        } else {
          setEventLogs(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setEventLogs([]);
      }
    };

    fetchEventLogs();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-20">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-gray-900 flex justify-center items-center h-[10vh]">
              <h1 className="text-gray-200">EVENT LOGS</h1>
            </div>
            <div className="divide-y bg-white divide-gray-200">
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
                        EVENT TYPE
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase "
                      >
                        EVENT DESCRIPTION
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase "
                      >
                        CREATED AT
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase "
                      >
                        BY USER
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase "
                      >
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {eventLogs.map((event) => {
                      <tr key={event.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          {event.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                          {event.event_type}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 text-wrap text-justify">
                          {event.event_description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          {event.created_at}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                          {event.by_user}
                        </td>
                        <td className="px-6 py-4 flex gap-3 whitespace-nowrap text-sm font-medium">
                          <button
                            type="button"
                            className="inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-900 hover:text-red-800 disabled:opacity-50 disabled:pointer-events-none"
                          >
                            Remove
                          </button>
                        </td>
                      </tr>;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEventLogs;
