import React from "react";
import {
  DashboardStats,
  DashboardBase64Table,
} from "./adminDashboardContent/index";

const AdminDashboard = () => {
  return (
    <>
      <div>
        <DashboardStats />
        <div className="p-10 justify-center gap-10">
          <DashboardBase64Table />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
