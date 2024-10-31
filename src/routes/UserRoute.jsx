import React from "react";
import Home from "../pages/Home";
import PayRent from "../pages/PayRent";
import { Routes, Route } from "react-router-dom";
import PostProperty from "../pages/postProperty";

const UserRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay-rent" element={<PayRent />} />
        <Route path="/post-property" element={<PostProperty />} />
      </Routes>
    </div>
  );
};

export default UserRoute;
