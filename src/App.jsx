import React from "react";
import { Outlet } from "react-router-dom";
// import UserLayout from "./layout/UserLayout";
// import UserRoute from "./routes/UserRoute";
// import LoginSignup from "./components/LoginSignup";
// import PayRent from "./pages/PayRent";
// import PostProperty from "./pages/PostProperty";
// import HomeService from "./pages/HomeService";
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
