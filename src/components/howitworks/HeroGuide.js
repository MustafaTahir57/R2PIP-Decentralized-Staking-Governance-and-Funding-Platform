import React from 'react';
import imgoverview from "../../assets/img/Steps CC.svg";

export default function HeroGuide() {
  return (
    <div  className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between w-full mt-16 gap-8 lg:gap-6">
        {/* Text section */}
        <div data-aos="fade-right" className="w-[100%] px-2 md:w-auto lg:mx-[100px] relative lg:right-10 xl:right-[80px] gap-y-3">
            <h6 className="text-[30px] md:text-[50px] w-full md:w-[550px] font-extrabold text-red1 mb-2 md:mb-5">
            Step by Step Guide
            </h6>
            <p className="md:w-[610px] mx-auto text-sm sm:text-base text-gray-300 py-3 md:py-6">
            Unlock your potential with R2PIP—enroll, learn, earn rewards, and redeem exclusive opportunities to grow personally and professionally. Start your journey today!            </p>
        </div>

        {/* Image section */}
        <div data-aos="fade-left" className="flex  justify-center lg:justify-end">
            <img src={imgoverview} alt="hero" className="w-[60%] h-[50%] max-w-[500px]" />
        </div>
    </div>
);
}
