"use client";
import { FiArrowUpRight } from "react-icons/fi";
import React from "react";
import HexagonScroll from "./HexagonScroll";

const ApproachSection = () => {
  return (
    <div className="relative">
     <h3 className="
  absolute left-1/2  top-20 ml-3
  -translate-x-1/2 -translate-y-1/2
  text-xl md:text-xl font-extrabold uppercase tracking-wide
  pointer-events-none z-20
">
  <span className="text-black">WAY OF </span>
  <span className="text-[#f1c800] ">WORKING</span>
</h3>

      <section className="w-full flex flex-col min-h-screen md:flex-row">
      {/* LEFT SIDE */}
      <div className="bg-[#f1c800] w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
        <h2 className=" text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-black">
          OUR<br />APPROACH
        </h2>

        <p className="text-black mt-6 text-lg leading-relaxed max-w-xl">
          Only when we understand how a society works can we achieve an inclusive
          experience. Places that make a difference. This requires a knack for
          research. That's why we created the INPACT model. We take each step in
          the model together. With our client, but also always with the end user.
          This is how we make INPACT.
        </p>

     <button className="group mt-8 border border-black text-black font-medium px-6 py-3 rounded-full hover:bg-black hover:text-[#f1c800] transition-all duration-300 flex items-center gap-2 w-fit">

  OUR APPROACH

  <FiArrowUpRight
    className="
      transition-transform duration-500 ease-out
      group-hover:rotate-[48deg] 
      rotate-[-10deg]
      group-hover:scale-[1.15]
    "
    size={20}
  />
</button>

      </div>

      {/* RIGHT SIDE */}
      <div className="bg-black w-full md:w-1/2 flex justify-center items-center p-10 relative">
     <HexagonScroll/>
      </div>
    </section>
    </div>
  );
};

export default ApproachSection;
