import React from "react";
import bannerImage from "../../Resource/Image_website/banner.jpg";

const Banner = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="absolute inset-0    bg-white/50 md:bg-white/0"></div>

      <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-semibold">
          Midland Network <br />
          
        <div>
        We are...
        </div>
        
          </h1>

          <p class="mt-4 max-w-lg sm:leading-relaxed">
          Midland Networks started life as a telecom company and it's still the major part of our business. We have expanded our services over the years at customer request to offer related services, providing our customers with one port of call.
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              About Us
            </a>

            <a
              href="#"
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
