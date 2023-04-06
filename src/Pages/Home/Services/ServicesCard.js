import React from "react";
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'



const ServicesCard = ({ service }) => {
  return (
    <a
      href="#"
      className="rounded-xl p-2   bg-white shadow-lg overflow- transition duration-300 ease-in-out transform hover:scale-[1.01] max-w-[400px] mx-2.5"
    >
      <div className="flex ">
        <div className=" p-4 ">
          <div className="mb-4">
            <h4 className="text-[#6E6E73] text-base font-semibold  mb-1">
              {service.category}
            </h4>
            <h3 className="text-gray-900 text-3xl font-bold h-14">
              {service.title}
            </h3>
          </div>
          <div className=" text-[#29303b] font-semibold leading-relaxed mb-3 h-20">
            {service.description}
          </div>
          <div className="">
            <img
              src={service.image_url}
              alt={service.title}
              className="w-full object-cover object-center "
            />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ServicesCard;
