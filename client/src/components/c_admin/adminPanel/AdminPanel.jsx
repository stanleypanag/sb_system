import React from "react";
import {
  AdminSidebar,
  AdminUserManager,
  AdminResolutionManager,
  AdminOrdinanceManager,
} from "./adminParts/index";
import { Routes, Route } from "react-router-dom";

const AdminPanel = () => {
  return (
    <>
      <div className="flex flex-row h-[full]">
        <aside className="h-[full]">
          <AdminSidebar />
        </aside>

        <main
          style={{
            backgroundImage:
              "linear-gradient(to right top, #fcf6d6, #c0af9c, #806f68, #403737, #000000)",
          }}
          className="w-full h-[full]"
        >
          <Routes>
            <Route path="/" element={<AdminUserManager />} />
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
