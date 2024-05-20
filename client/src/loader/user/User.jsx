import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  Homepage,
  Resolution,
  Ordinance,
  LoginPage,
  RegisterPage,
  HeaderGuest,
  HeaderRegular,
} from "../../components/c_user";
import Footer from "../../components/reusable/footer/Footer";

import PropTypes from "prop-types";

const User = (props) => {
  return (
    <BrowserRouter>
      <>
        <div className="header">
          {props.value ? <HeaderRegular /> : <HeaderGuest />}
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
        <Footer />
      </>
    </BrowserRouter>
  );
};

User.protoTypes = {
  value: PropTypes.bool,
};

export default User;
