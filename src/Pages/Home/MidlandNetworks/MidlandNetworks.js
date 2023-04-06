import React from "react";
import CardDetails from "./CardDetails";
import Glider from "react-glider";

import guard from '../../../Resource/SVG/guard.svg'
import love from '../../../Resource/SVG/love.svg'
import m from '../../../Resource/SVG/m.svg'
import tick from '../../../Resource/SVG/tick.svg'


const MidlandNetworks = () => {

    const infoData = [{
        "id": "1",
        "icon":guard,
        
        "text": "Quality assurance.",
        "text_2": "Only the best for you.",
        
        "text_color2": "#528bff"
    },
    {
        "id": "2",
        "icon":love,
        
        "text": "Price match. ",
        "text_2": "Quality great deals promise.",
        
        "text_color2": "#ea3357"
    },
    {
        "id": "3",
        "icon":tick,
        
        "text": "Customer service. ",
        "text_2": "More than just shopping.",
        
        "text_color2": "#528bff"
    },
    {
        "id": "4",
        "icon":m,
        
        "text": "Installation",
        "text_2": "and exceed the industry standards",
        
        "text_color2": "text-gradient-to-r from-[#eba56c] to-[#67b1e4]"
    }

]
    

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
       
          slidesToShow={3.7}
          slidesToScroll={1}

          responsive={[
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 3.7,
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
