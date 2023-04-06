import React from "react";

import Banner from "../Home/Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="bg-[#f5f5f7] ">
      <Banner></Banner>
      <div className="">
        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
