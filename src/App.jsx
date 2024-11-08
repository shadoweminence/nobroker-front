import React from "react";
import { Outlet } from "react-router-dom";
import Navb from "./components/Navbar/Navb";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navb />
      <div className="mt-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
