import React from "react";
import logo from "../../Resource/Images/Logo/logo.png";
import { Link } from "react-router-dom";

import {FaFacebookF, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  const services = [
    {
      id: "01",
      name: "Telephone Systems",
      url: "",
    },
    {
      id: "02",
      name: "Lines & Calls",
      url: "",
    },
    {
      id: "03",
      name: "Internet",
      url: "",
    },
    {
      id: "04",
      name: "Mobile & 4G",
      url: "",
    },
    {
      id: "05",
      name: "Cabling",
      url: "",
    },
    {
      id: "06",
      name: "Wifi",
      url: "",
    },
    {
      id: "07",
      name: "Hosted Telephony System",
      url: "",
    },
  ];

  const useful_links = [
    {
      id: "01",
      name: "Our Brochure",
      url: "",
    },
    {
      id: "02",
      name: "Order Form",
      url: "",
    },
    {
      id: "03",
      name: "Finance Calculator",
      url: "",
    },
    {
      id: "04",
      name: "Blog",
      url: "",
    },
  ];

  return (
    <div>
      <footer aria-label="Site Footer" className="bg-[#191d65] ">
        <div className="mx-auto max-w-screen-lg px-4 pt-16 pb-8 sm:px-6 lg:px-8">
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-32">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <img src={logo} className="w-28 " alt="" />
              <p className="mt-4 text-center text-white lg:text-left lg:text-lg">
                Midland Networks started life as a business lines and calls
                provider in Birmingham City Centre, we moved our offices to
                Halesowen in 2012. We expanded over the following years to cover
                all forms of business communications and gained customers from
                all over the UK.
              </p>

              <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                <a
                  className="text-[#0a81ed] border-2 border-[#0a81ed] rounded-full p-2"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Facebook </span>
                  <FaFacebookF className="w-5 h-5"></FaFacebookF>
                </a>

                <a
                   className="text-[#4c92d3] border-2 border-[#4c92d3] rounded-full p-2"
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Twitter </span>
                  <FaTwitter className="w-5 h-5"></FaTwitter>
                </a>
                <a
                   className="text-[#b31212] border-2 border-[#b31212] rounded-full p-2"
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Youtube </span>
                  <FaYoutube className="w-5 h-5"></FaYoutube>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-2 lg:text-left">
              <div>
                <strong className="font-medium text-gray-900 text-white">
                  Our Courses
                </strong>

                <nav
                  aria-label="Footer Services Nav"
                  className="mt-6 flex flex-col space-y-1"
                >
                  {/* {services.map((service) => (
                    <p
                      key={service}
                      className='"text-white hover:text-white/75'
                    >
                      <Link to="#">{service}</Link>
                    </p>
                  ))} */}
                </nav>
              </div>

              <div>
                <strong className="font-medium text-gray-900 text-white">
                  Site Map
                </strong>

                <nav
                  aria-label="Footer About Nav"
                  className="mt-6 flex flex-col space-y-1"
                >
                 
                </nav>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8 ">
            <p className="text-center text-base font-semibold leading-relaxed text-white">
              © 2022 Midland Networks Group Holdings Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
