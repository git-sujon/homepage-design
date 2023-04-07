import React from "react";
import supporting_image from "../../Resource/Images/Supporting/img-32.png";

const Supporting = () => {
  return (
  <div className="bg-white  pt-16">
      <div class=" bg-[#f5f5f7]  grid md:grid-cols-2 gap-10  lg:mx-[190px] mx-auto  px-5  rounded-xl p-12 ">
      <div class="pl-12">
        <div class=" text-center sm:text-left">
          <h2 class="text-4xl font-semibold text-[#1E2839] mb-5 md:mb-0">
            Supporting any business size
          </h2>

          <p class=" text-gray-600 font-semibold md:mt-4">
            Our clients range from small start-up businesses who just need a
            phone line and broadband, right through to national retailers who
            require multi-site business telephone systems, lease line internet
            connectivity or cloud-based data networks. So we are confident we
            will be able to help your business.
          </p>

          <div class="mt-4 md:mt-8">
            <a
              href="#"
              class="inline-block rounded bg-[#367CF3] px-8 py-3.5 text-sm font-medium text-white transition hover:bg-[#367CF3] focus:outline-none focus:ring"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <img
        alt="supporting image"
        src={supporting_image}
        class=" w-full "
      />
    </div>
  </div>
  );
};

export default Supporting;
