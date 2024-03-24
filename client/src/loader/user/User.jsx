import React from "react";
import {Route, Routes} from "react-router-dom";

// imports from Component/c_guest
import {
  Homepage,
  Resolution,
  Ordinance,
  LoginPage,
  RegisterPage,
} from "../../components/c_user";

const User = () => {
  return (
    <>
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/resolution" element={<Resolution />} />
          <Route path="/ordinance" element={<Ordinance />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </>
  );
};

export default User;
