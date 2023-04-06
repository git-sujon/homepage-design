import React from "react";
import advice_image from "../../../Resource/Images/Help/img-25.png";
import training_image from "../../../Resource/Images/Help/img-26.jpg";
import support_image from "../../../Resource/Images/Help/img-27.png";
import guidance_image from "../../../Resource/Images/Help/img-24.png";
import messaging_image from "../../../Resource/Images/Help/img-28.jpg";

const Help = () => {
  return (
    <div className="pt-16  lg:px-[190px] px-5  mx-auto ">
      <p className="font-semibold text-[#29303b] text-[30px] mb-5 ">
        Help is here.
        <span className="text-[#888f97]"> Always ready for you.</span>
      </p>
      <div className=" my-10">
        {/* first part */}

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {/* Advice  */}
          <div className="rounded-xl    bg-white shadow-lg overflow- transition duration-300 ease-in-out transform hover:scale-[1.01]  ">
            <div className="flex ">
              <div className=" p-6 ">
                <div className="mb-4">
                  <h4 className="text-[#C93254] text-lg  font-semibold uppercase  mb-1">
                    Advice
                  </h4>
                  <h3 className="text-[#4F4F4F] text-xl font-semibold ">
                    Specialist advice
                  </h3>
                </div>
              </div>
            </div>
            <div className="w-[295px]  mx-auto my-5">
              <img src={advice_image} alt="ss" className="w-full text-center" />
            </div>
          </div>

          {/* both raw */}

          <div className="flex flex-col ">
            {/* TRAINING */}
            <div className="rounded-xl    bg-white shadow-lg overflow- transition duration-300 ease-in-out transform hover:scale-[1.01]  h-52">
              <div className="flex flex-col ">
                <div className=" px-6 pt-6">
                  <div className="mb-4">
                    <h4 className="text-[#3274f6] text-lg  font-semibold uppercase  mb-1">
                      TRAINING
                    </h4>
                    <h3 className="text-[#4F4F4F] text-xl font-semibold ">
                      100 + training videos to support you
                    </h3>
                  </div>
                </div>

                <div className=" h-28 ">
                  <img src={training_image} alt="ss" className="w-full h-28" />
                </div>
              </div>
            </div>

            {/* support  */}
            <div className="rounded-xl    shadow-lg overflow- transition duration-300 ease-in-out transform hover:scale-[1.01] bg-gradient-to-r from-[#e0ebfc] to-[#f1e9ec]  mt-5">
              <div className=" p-6 flex   justify-between h-52">
                <div className="">
                  <h4 className="text-black text-lg  font-semibold uppercase  mb-1">
                    Support
                  </h4>
                  <h3 className="text-[#4F4F4F] text-xl font-semibold ">
                    Log a ticket in <br />
                    Our customer <br />
                    Support portal
                  </h3>
                </div>
                <div className="w-28 ">
                  <img src={support_image} alt="" className="w-full " />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second part */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {/* Messaging  */}
          <div className="rounded-xl    shadow-lg overflow- transition duration-300 ease-in-out transform hover:scale-[1.01] bg-white mt-5">
            <div className=" flex   justify-between h-40">
              <div className=" p-6">
                <h4 className="text-[#04D2FF] text-lg  font-semibold uppercase  mb-1">
                  Messaging
                </h4>
                <h3 className="text-[#4F4F4F] text-xl font-semibold ">
                  Quick <br />
                  and efficent <br />
                  communication
                </h3>
              </div>
              <div className="w-1/2 ">
                <img src={messaging_image} alt="" className="w-full " />
              </div>
            </div>
          </div>
          {/* GUIDANCE  */}
          <div className="rounded-xl    shadow-lg overflow- transition duration-300 ease-in-out transform hover:scale-[1.01] bg-white mt-5">
            <div className=" p-6 flex   justify-between h-40">
              <div className="">
                <h4 className="text-[#ABABAB] text-lg  font-semibold uppercase  mb-1">
                  GUIDANCE
                </h4>
                <h3 className="text-[#4F4F4F] text-xl font-semibold ">
                User guides & <br />Sofwtare
                </h3>
              </div>
              <div className="w-44 -mr-5 ">
                <img src={guidance_image} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
