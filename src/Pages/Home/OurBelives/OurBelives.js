import React from "react";
import ourBelivesImage1 from "../../../Resource/Images/Belives/img-23.jpg";
import ourBelivesImage2 from "../../../Resource/Images/Belives/img-30.jpg";
import ourBelivesImage3 from "../../../Resource/Images/Belives/img-31.jpg";

const OurBelives = () => {
  return (
    <div className="pt-16  lg:px-[190px] px-5  mx-auto ">
      <p className="font-semibold text-[#29303b] text-[30px] mb-5 ">
        Our belives.
        <span className="text-[#888f97]"> The way we do business.</span>
      </p>
      <div className=" my-10">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          {/* first part */}
          <div className="col-span-2 grid md:grid-cols-2 grid-cols-1 ">
            <div className="flex justify-center items-center text-center bg-white rounded-xl">
              <div className="">
                <h4 className="text-[#3274f6] text-xl  font-semibold uppercase  mb-1">
                  TRUST
                </h4>
                <h3 className="text-[#4F4F4F] text-2xl font-semibold ">
                  We belive trust is the foundation of <br /> any lasting
                  relationship.
                </h3>
              </div>
            </div>
            <div className="pt-8 md:pt-0 bg-white">
              <img src={ourBelivesImage1} alt="" className="w-full" />
            </div>
          </div>

      


        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 mt-8">
              {/* first part */}
          <div className=" ">
            <div className="flex justify-center items-center text-center bg-white rounded-xl">
              <div>
                <h4 className="text-[#c93254] text-xl  font-semibold uppercase  mb-1">
                  PASSION
                </h4>
                <h3 className="text-[#4F4F4F] text-2xl font-semibold ">
                  Think bigger.
                </h3>
              </div>
            </div>
            <div className="">
              <img src={ourBelivesImage3} alt="" className="w-full h-44" />
            </div>
          </div>

          {/* first part */}
          <div className=" ">
            <div className="flex justify-center items-center text-center bg-white rounded-xl">
              <div>
                <h4 className="text-[#c93254] text-xl  font-semibold uppercase  mb-1">
                EXPERTISE
                </h4>
                <h3 className="text-[#4F4F4F] text-2xl font-semibold ">
                Over 20 years of experience.
                </h3>
              </div>
            </div>
            <div className="">
              <img src={ourBelivesImage2} alt="" className="w-full h-44" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBelives;
