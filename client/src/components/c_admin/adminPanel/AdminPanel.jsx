import React from "react";
import { AdminDashbaord, AdminSidebar } from "./adminParts/index";
import { Routes, Route } from "react-router-dom";

const AdminPanel = () => {
  return (
    <>
      <div className="flex flex-row">
        <aside>
          <AdminSidebar />
        </aside>
        <main className="bg-gray-700 w-full h-full">
          <AdminDashbaord />
        </main>
      </div>
    </>
  );
};

export default AdminPanel;
