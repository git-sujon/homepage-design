import React from "react";
import dd from "../../../Resource/SVG/guard.svg";
const CardDetails = ({ data }) => {
  const { icon, text, text_2, text_color2 } = data;

  return (
    <div className="rounded-2xl   ml-5 bg-white shadow-lg overflow- transition duration-300 ease-in-out transform hover:scale-[1.01] p-9">
      <img src={icon} alt="d" className="mb-4" />
      <p className="font-semibold text-lg text-">
        {text} <span className={`text-${text_color2}`}>{text_2}</span>{" "}
      </p>
    </div>
  );
};

export default CardDetails;
