import React from "react";
import { Outlet } from "react-router-dom";
import Navb from "./components/Navbar/Navb";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navb />
      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
