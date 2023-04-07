import React from "react";

const Subscribe = () => {
  return (
    <div className="text-center pb-10">
      <h2 className="text-4xl font-bold  text-[#29303B]">Let's Connect</h2>
      <button class="my-10 group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
        <div class="absolute inset-0 w-3 bg-gradient-to-r from-[#eba56c] to-[#67b1e4] border-[#eba56c]  transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span class="relative text-[#67b1e4] group-hover:text-white border-[#eba56c] font-bold">
          GET IN TOUCH
        </span>
      </button>
      <h2 className="text-4xl font-semibold text-[#29303B]">Stay updated.</h2>
      <p className="text-lg font-semibold text-[#898e98]">
        Discover the latest new
      </p>
    </div>
  );
};

export default Subscribe;
