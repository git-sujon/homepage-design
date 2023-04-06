import React, { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";

import phone_system_image from "../../../Resource/Images/Services/Phone_System.png";
import lines_calls_image from "../../../Resource/Images/Services/Lines_Calls.png";
import Internet_image from "../../../Resource/Images/Services/Internet.png";
import cabling_Wifi_image from "../../../Resource/Images/Services/Cabling_Wifi.png";
import mobile_4G_image from "../../../Resource/Images/Services/Mobile_4G.png";

const Services = () => {
  const servicesData = [
    {
      id: "01",
      category: "Phone System",
      title: "Oh. So. Pro.",
      description:
        "We install & support Business telephone system using VoIP system techology",
      image_url: `${phone_system_image}`,
    },
    {
      id: "02",
      category: "Lines & Calls",
      title: "Network Cabling, WIFI, and fibre optics",
      description: "",
      image_url: `${lines_calls_image}`,
    },
    {
      id: "03",
      category: "Internet",
      title: "Business mobile packages and 4G data",
      description: "",
      image_url: `${Internet_image}`,
    },
    {
      id: "04",
      category: "Cabling & Wifi",
      title: "Business Telephone Lines & Analogue & ISDN",
      description: "",
      image_url: { cabling_Wifi_image },
    },
    {
      id: "05",
      category: "Mobile & 4G",
      title: "Business Internet Connectivity",
      description: "",
      image_url: ` ${mobile_4G_image}`,
    },
  ];

  return (
    <div className="pt-16">
      <p className="font-semibold text-[#29303b] text-[30px] mb-5">
        Services.
        <span className="text-[#888f97]">Here where the fun begins.</span>
      </p>
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData?.map((service) => (
            <ServicesCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
