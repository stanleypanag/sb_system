import React from 'react'

import { BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router-dom";

// imports from Component/c_guest
import { Header, Homepage, Resolution, Ordinance, LoginPage, RegisterPage } from '../../components/c_guest'

const Guest = () => {
  return (
    <BrowserRouter>

    <>

      <div className="header">
        <Header/>
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
  )
}

export default Guest