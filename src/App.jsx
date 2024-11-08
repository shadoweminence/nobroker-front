import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import PayRent from "./pages/PayRent";
import PostProperty from "./pages/PostProperty";
import HomeService from "./pages/HomeService";
import Home from "./pages/Home";
import Navb from "./components/Navbar/Navb";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Navb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginSignUp" element={<LoginSignup />} />
        <Route path="/pay-rent" element={<PayRent />} />
        <Route path="/post-property" element={<PostProperty />} />
        <Route path="/HomeService" element={<HomeService />} />\
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
