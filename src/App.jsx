import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./layout/UserLayout";
import UserRoute from "./routes/UserRoute";
import LoginSignup from "./components/LoginSignup";
import PayRent from "./pages/PayRent";
import PostProperty from "./pages/PostProperty";
import HomeService from "./pages/HomeService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="/" element={<UserRoute />} />
          <Route path="/LoginSignUp" element={<LoginSignup />} />
          <Route path="/PayRent" element={<PayRent />} />
          <Route path="/PostProperty" element={<PostProperty />} />
          <Route path="/HomeService" element={<HomeService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
