import React from "react";

import Banner from "../Home/Banner/Banner";
import Services from "./Services/Services";
import Help from "./Help/Help";
import MidlandNetworks from "./MidlandNetworks/MidlandNetworks";
import Supporting from "../Supporting/Supporting";
import Brands from "./Brands/Brands";
import Testimonials from "./Testimonials/Testimonials";

import AwardWinning from "./AwardWining/AwardWining";
import OurBelives from "./OurBelives/OurBelives";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <div className="bg-[#f5f5f7] ">
      <Banner></Banner>
      <Services></Services>
      <Help></Help>
      <MidlandNetworks></MidlandNetworks>
      <Supporting></Supporting>
      <Brands></Brands>
      <Testimonials> </Testimonials>
      <AwardWinning></AwardWinning>
      <OurBelives></OurBelives>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
