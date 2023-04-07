import React, { useEffect } from "react";
import Glider from "react-glider";

import "glider-js/glider.min.css";
import "../Brands/Brands.css";
import img1 from "../../../Resource/Images/Partners/1.png";
import img2 from "../../../Resource/Images/Partners/2.png";
import img3 from "../../../Resource/Images/Partners/3.png";
import img4 from "../../../Resource/Images/Partners/4.png";
import img5 from "../../../Resource/Images/Partners/5.png";
import img6 from "../../../Resource/Images/Partners/6.png";
import img7 from "../../../Resource/Images/Partners/7.png";
import img8 from "../../../Resource/Images/Partners/8.png";
import img9 from "../../../Resource/Images/Partners/9.png";
import img10 from "../../../Resource/Images/Partners/10.png";
import img11 from "../../../Resource/Images/Partners/11.png";

const Brands = () => {
  const brandPartners = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

 

  return (
    <div className="py-16 lg:px-[190px] mx-auto px-5 bg-white">
      <hr className="border-black mb-10" />
      <div className="flex items-center">
        <p className="font-semibold text-base mr-20">
          MIDLAND
          <br />
          NETWORKS <br />
          PARTNERSHIPS
        </p>

        <div className="max-w-screen-md">
          <Glider
            className="glider-container"
            draggable
            
            slidesToShow={3}
            slidesToScroll={1}
            hasArrows
            responsive={[
              {
                breakpoint: 400,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  duration: 0.25,
                },
              },
            ]}
          >
            {brandPartners.map((brand, index) => (
              <img
                src={brand}
                alt=""
                className="brands-image ml-5"
                key={brand}
      
              />
            ))}
          </Glider>
        </div>
      </div>
    </div>
  );
};

export default Brands;
