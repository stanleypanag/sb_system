import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import {HeaderRegular, HeaderGuest} from "../../components/c_user/";

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
    <BrowserRouter>
      <>
        <div className="header">
          {/* <HeaderRegular /> */}
          <HeaderGuest />
        </div>

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
    </BrowserRouter>
  );
};

export default User;
