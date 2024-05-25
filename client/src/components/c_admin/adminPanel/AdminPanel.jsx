import React from "react";
import {
  AdminDashbaord,
  AdminSidebar,
  AdminUserManager,
  AdminResolutionManager,
  AdminOrdinanceManager,
} from "./adminParts/index";
import { Routes, Route } from "react-router-dom";

const AdminPanel = () => {
  return (
    <>
      <div className="flex flex-row h-full">
        <aside className="h-full">
          <AdminSidebar />
        </aside>

        <main className="bg-gray-700 w-full h-[100vh]">
          <Routes>
            <Route path="/" element={<AdminDashbaord />} />
            <Route path="/userManager" element={<AdminUserManager />} />
            <Route
              path="/resolutionManager"
              element={<AdminResolutionManager />}
            />
            <Route
              path="/ordinanceManager"
              element={<AdminOrdinanceManager />}
            />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default AdminPanel;
