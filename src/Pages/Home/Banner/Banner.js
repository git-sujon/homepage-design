import React from "react";
import bannerImage from "../../../Resource/Image_website/banner.jpg";
import Typewriter from "typewriter-effect";
const Banner = () => {

const textData=[ "Telecom", "Providers", "Engineers", "Data Cabler", "IT Experts", "Experienced" , "Passionate" ]

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat lg:h-screen text-[#29303B] "
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0    bg-white/50 md:bg-white/0"></div>

      <div class="relative mx-auto max-w-[980px]  px-4 py-32  lg:flex  lg:items-center ">
        <div class="max-w-xl ">
          <h1 class="text-3xl font-semibold">
            Midland Network <br />
            We are 
            <span className="inline-block text-[#66c4f2] ml-1">
            <Typewriter

            options={{
              strings: [ "Telecom", "Providers", "Engineers", "Data Cabler", "IT Experts", "Experienced" , "Passionate" ],
              autoStart: true,
              loop: true,
            }}
          />
            </span>
          </h1>

          <p class="mt-4 max-w-lg sm:leading-relaxed">
            Midland Networks started life as a telecom company and it's still
            the major part of our business. We have expanded our services over
            the years at customer request to offer related services, providing
            our customers with one port of call.
          </p>

          <div class="mt-8 flex  ">
           <div className="w-40">
           <a
              href="#"
              class=" border hover:border-none hover:bg-white uppercase rounded-xl  px-9 py-3 text-sm font-medium  border-black duration-300 ease-out"
            >
              About Us
            </a>
           </div>
            
           <div  className="w-40">
           <a
              href="#"
              class=" border hover:border-none hover:bg-white uppercase rounded-xl  px-9 py-3 text-sm font-medium  border-[#66c4f2] bg-[#66c4f2] text-white hover:text-[#29303B] transition duration-300 ease-out"
            >
              About Us
            </a>
           </div>
            

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
