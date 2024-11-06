import React, { useState } from "react";
import Search from "../components/Search";
import CheckEligibility from "../components/CheckEligibility";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("Rent");
  return (
    <>
      <Search
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <CheckEligibility selectedOption={selectedOption} />
    </>
  );
};

export default Home;
