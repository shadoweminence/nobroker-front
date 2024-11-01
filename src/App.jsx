import React from "react";
import PayRent from "./pages/PayRent";
import Navb from "./components/Navbar/Navb";
import Homepage from "./components/FrontPage/Homepage";
// import Navbar from "./components/Navbar/Navbar";
import PostProperty from "./components/postProperty";

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
