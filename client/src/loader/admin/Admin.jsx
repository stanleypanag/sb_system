import React from "react";
import { AdminPanel } from "../../components/c_admin";
import { BrowserRouter } from "react-router-dom";

const Admin = () => {
  return (
    <BrowserRouter>
      <AdminPanel />
    </BrowserRouter>
  );
};

export default Admin;
