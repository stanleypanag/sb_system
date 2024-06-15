import React from "react";
import {
  AdminSidebar,
  AdminUserManager,
  AdminResolutionManager,
  AdminOrdinanceManager,
  AdminDashboard,
  AdminEventLogs,
} from "./adminParts/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

const AdminPanel = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-row h-screen">
        <aside>
          <AdminSidebar />
        </aside>

        <main className="w-full overflow-y-auto bg-gray-700">
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
            <Route path="/eventLogs" element={<AdminEventLogs />} />
          </Routes>
        </main>
      </div>
    </QueryClientProvider>
  );
};

export default AdminPanel;
