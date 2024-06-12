import React from "react";
import {
  AdminSidebar,
  AdminUserManager,
  AdminResolutionManager,
  AdminOrdinanceManager,
  AdminDashboard,
} from "./adminParts/index";
import { Routes, Route } from "react-router-dom";

const AdminPanel = () => {
  return (
    <>
      <div className="flex flex-row h-screen">
        <aside>
          <AdminSidebar />
        </aside>

        <main
          style={{
            backgroundImage:
              "linear-gradient(to right top, #fcf6d6, #c0af9c, #806f68, #403737, #000000)",
          }}
          className="w-full overflow-y-auto"
        >
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route
              path="/resolutionManager"
              element={<AdminResolutionManager />}
            />
            <Route
              path="/ordinanceManager"
              element={<AdminOrdinanceManager />}
            />
            <Route path="/userManager" element={<AdminUserManager />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default AdminPanel;
