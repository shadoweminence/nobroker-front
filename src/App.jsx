import { useState } from 'react'

import Navb from './components/Navbar/Navb'
import Homepage from './components/FrontPage/Homepage'
import React from "react";
import PayRent from "./pages/PayRent";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
     <Navb/>
     <Homepage/>
      <PayRent />
      {/* <Navbar /> */}
    </>
  );
}

export default App;
