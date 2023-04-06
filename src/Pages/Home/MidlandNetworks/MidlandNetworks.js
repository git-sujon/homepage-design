import React from "react";
import CardDetails from "./CardDetails";
import Glider from "react-glider";

const MidlandNetworks = () => {

    const infoData = [{
        "id": "1",
        "icon": "star",
        "icon_color": "yellow",
        "text": "Favorite",
        "text_color1": "black",
        "text_color2": "yellow"
    },
    {
        "id": "2",
        "icon": "bookmark",
        "icon_color": "green",
        "text": "Bookmark",
        "text_color1": "white",
        "text_color2": "green"
    },
    {
        "id": "2",
        "icon": "bookmark",
        "icon_color": "green",
        "text": "Bookmark",
        "text_color1": "white",
        "text_color2": "green"
    },
    {
        "id": "2",
        "icon": "bookmark",
        "icon_color": "green",
        "text": "Bookmark",
        "text_color1": "white",
        "text_color2": "green"
    }

]
    

  return (
    <div className="pt-16  lg:pl-[190px]  px-5  ">
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
                slidesToShow: 1.5,
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
