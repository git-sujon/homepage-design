import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Testimonials/testimonials.css'
import { AiFillCaretRight } from "react-icons/ai";

import testimonialImage1 from "../../../Resource/Images/Testimonials/img-18.png";
import testimonialImage2 from "../../../Resource/Images/Testimonials/img-19.png";

const Testimonials = () => {
  const testimonialsInfo = [
    {
      id: 1,
      title: "WEST MIDLANDS FIRE SERVICE",
      link_name: "Watch Video",
      link_url: "",
      reviewer_name: "Adrian Scoyne",
      reviewer_title: "INFRASTRUCTURE ENGINEER",
      product_image: testimonialImage2,
    },
    {
      id: 2,
      title: "Whitley Tandoori Ltd",
      link_name: "Watch Video",
      link_url: "",
      reviewer_name: "Adrian Scoyne",
      reviewer_title: "INFRASTRUCTURE ENGINEER",
      product_image: testimonialImage1,
    },
    {
      id: 3,
      title: "WEST MIDLANDS FIRE SERVICE",
      link_name: "Watch Video",
      link_url: "",
      reviewer_name: "Adrian Scoyne",
      reviewer_title: "INFRASTRUCTURE ENGINEER",
      product_image: testimonialImage2,
    },
    {
      id: 4,
      title: "Whitley Tandoori Ltd",
      link_name: "Watch Video",
      link_url: "",
      reviewer_name: "Adrian Scoyne",
      reviewer_title: "INFRASTRUCTURE ENGINEER",
      product_image: testimonialImage1,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,

    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className=" bg-gradient-to-r from-[#3598d3]  to-[#2d3185] pt-10 pb-20 text-white">
      <div className="text-center p-5 ">
        <h2 className="text-4xl font-semibold">Clients testimonials </h2>
        <p className="text-lg font-semibold text-[#cfcfcf]">Don’t just take our word for it.</p>
      </div>

      <div className=" border bg-white max-w-4xl mx-auto rounded-lg">
        <Slider {...settings}>
          {testimonialsInfo.map((testimonials) => {
            return (
              <div key={testimonials.id} className="flex justify-between  text-black p-10 testimonial_flex">
                {/* info side  */}

                <div className="flex flex-col justify-between max-w-sm">
                  <div className="">
                    <h2 className="text-3xl font-semibold">
                      {testimonials.title}
                    </h2>
                    <a className="text-[#4c92d3] flex" href="#">
                      {testimonials.link_name}{" "}
                      <AiFillCaretRight className="w-5 h-5"></AiFillCaretRight>{" "}
                    </a>
                  </div>
                  <div className="flex  items-center">
                    <div>
                      <img src={testimonials.product_image} className="w-20" alt="" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-base font-semibold">{testimonials.reviewer_name}</h3>
                      <p className="text-xs">{testimonials.reviewer_title}</p>
                    </div>
                  </div>
                </div>

                {/* image side  */}
                <div className=" ">
                  <img
                    alt={`${testimonials.title}`}
                    src={testimonials?.product_image}
                    className="w-96 "
                  />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
