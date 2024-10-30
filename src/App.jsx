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
      {/* <Homepage/> */}
      <PayRent />
=======
     <Navb/>
     {/* <Homepage/> */}
      {/* <PayRent /> */}
      <PostProperty />

      {/* <Navbar /> */}
    </>
  );
}

export default App;
