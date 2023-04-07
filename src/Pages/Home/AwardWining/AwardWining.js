import React from 'react'

import Glider from "react-glider";
import 'glider-js/glider.min.css';

import cloud from "../../../Resource/SVG/cloud.svg";
import sme from "../../../Resource/SVG/sme.svg";
import customer from "../../../Resource/SVG/customer.svg";
import sme_2 from "../../../Resource/SVG/sme_2.svg";
import AwardWinningDetails from './AwardWinningDetails';


const AwardWining = () => {


    const colors = {
      text_blue: "#528bff",
      text_red: "#ea3357",
      text_golden: "#eba56c",
      text_light_blue: "#67b1e4",
    };
  
   
        const AwardWinningData = [
          { 
            id: "1",
            icon: cloud,
            text: "Cloud Solutions",
      
            text_color: colors.text_blue,
          },
          {
            id: "2",
            icon: sme,
            text: "SME Solutions ",
       
            text_color: colors.text_red,
          },
          {
            id: "3",
            icon: customer,
            text: "Customer award ",
        
            text_color: colors.text_blue,
          },
          { 
            id: "4",
            icon: sme_2,
            text: "SME UC solutions",
        
            text_color: `text-gradient-to-r from-${colors.text_golden} to-${colors.text_light_blue}`,
          },
        ];
 
    return (
      <div className="py-16  lg:pl-[190px]  px-5  ">
        <p className="font-semibold text-[#29303b] text-[30px] mb-5 ">
        Award winnning service. 
          <span className="text-[#888f97]"> National recognition.</span>
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
            {AwardWinningData?.map((data) => (
              <AwardWinningDetails key={data.id} data={data} />
            ))}
          </Glider>
        </div>
      </div>
    );
  };

export default AwardWining