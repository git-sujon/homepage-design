import React from "react";
import Services from "./Services/Services";
import Banner from "../Home/Banner/Banner";

const Home = () => {
  return (
    <div className="bg-[#f5f5f7] ">
      <Banner></Banner>
      <div className="max-w-[980px] mx-auto">
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
