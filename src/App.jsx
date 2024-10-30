import { useState } from "react";

import Navb from "./components/Navbar/Navb";
import Homepage from "./components/FrontPage/Homepage";
import React from "react";
import PayRent from "./pages/PayRent";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navb />
      <Routes>
        {/* <Homepage/> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/pay-rent" element={<PayRent />} />

        {/* <Navbar /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
