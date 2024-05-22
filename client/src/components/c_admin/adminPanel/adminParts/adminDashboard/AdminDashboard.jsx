import React from "react";
import { DashboardStats, UserTable } from "./adminDashboardContent/index";

const AdminDashboard = () => {
  return (
    <>
      <div>
        <DashboardStats />
        <div className="p-10 justify-center gap-10">
          <UserTable />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
