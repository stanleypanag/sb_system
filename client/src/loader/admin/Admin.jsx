import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Header, AdminPanel } from "../../components/c_admin";

const User = () => {
  return (
    <BrowserRouter>
      <>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<AdminPanel />} />
          </Routes>
        </div>
      </>
    </BrowserRouter>
  );
};

export default User;
