import { useState } from "react";
import Navb from "./components/Navbar/Navb";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import UserRoute from "./routes/UserRoute";

function App() {
  return (
    <>
      <Navb />
      <PayRent />

      {/* <Homepage/> */}
      <PostProperty />

      {/* <Navbar /> */}
    </>
  );
}

export default App;
