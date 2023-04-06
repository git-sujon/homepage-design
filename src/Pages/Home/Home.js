import React from "react";

import Banner from "../Home/Banner/Banner";
import Services from "./Services/Services";
import Help from "./Help/Help";
import MidlandNetworks from "./MidlandNetworks/MidlandNetworks";

const Home = () => {
  return (
    <div className="bg-[#f5f5f7] ">
      <Banner></Banner>
      <Services></Services>
      <Help></Help>
      <MidlandNetworks></MidlandNetworks>
    </div>
  );
};

export default Home;
