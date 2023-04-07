import React from "react";

import Banner from "../Home/Banner/Banner";
import Services from "./Services/Services";
import Help from "./Help/Help";
import MidlandNetworks from "./MidlandNetworks/MidlandNetworks";
import Supporting from "../Supporting/Supporting";
import Brands from "./Brands/Brands";

const Home = () => {
  return (
    <div className="bg-[#f5f5f7] ">
      <Banner></Banner>
      <Services></Services>
      <Help></Help>
      <MidlandNetworks></MidlandNetworks>
      <Supporting></Supporting>
      <Brands></Brands>
    </div>
  );
};

export default Home;
