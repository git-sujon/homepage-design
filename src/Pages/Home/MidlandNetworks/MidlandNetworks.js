import React, { useEffect, useState } from "react";
import CardDetails from "./CardDetails";
import Glider from "react-glider";
import 'glider-js/glider.min.css'; 

import guard from "../../../Resource/SVG/guard.svg";
import love from "../../../Resource/SVG/love.svg";
import m from "../../../Resource/SVG/m.svg";
import tick from "../../../Resource/SVG/tick.svg";

const MidlandNetworks = () => {
  const [infoData, setInfoData] = useState([]);

  const colors = {
    text_blue: "#528bff",
    text_red: "#ea3357",
    text_golden: "#eba56c",
    text_light_blue: "#67b1e4",
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = [
        {
          id: "1",
          icon: guard,
          text: "Quality assurance.",
          text_2: "Only the best for you.",
          text_color2: colors.text_blue,
        },
        {
          id: "2",
          icon: love,
          text: "Price match. ",
          text_2: "Quality great deals promise.",
          text_color2: colors.text_red,
        },
        {
          id: "3",
          icon: tick,
          text: "Customer service. ",
          text_2: "More than just shopping.",
          text_color2: colors.text_blue,
        },
        {
          id: "4",
          icon: m,
          text: "Installation",
          text_2: "and exceed the industry standards",
          text_color2: `text-gradient-to-r from-${colors.text_golden} to-${colors.text_light_blue}`,
        },
      ];
      setInfoData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="py-16  lg:pl-[190px]  px-5  ">
      <p className="font-semibold text-[#29303b] text-[30px] mb-5 ">
        The Midland Networks difference.
        <span className="text-[#888f97]"> Thats right!</span>
      </p>
      <div className=" my-10">
      <Glider
            className="glider-container"
            draggable
            hasArrows
         
            slidesToShow={2.5}
            slidesToScroll={1}

            responsive={[
              {
                breakpoint: 400,
                settings: {
                  slidesToShow: 2.5,
                  slidesToScroll: 1,
            
                  duration: 0.25,
                },
              },
            ]}

            
          >
          {infoData?.map((data) => (
            <CardDetails key={data.id} data={data} />
          ))}
        </Glider>
      </div>
    </div>
  );
};

export default MidlandNetworks;
