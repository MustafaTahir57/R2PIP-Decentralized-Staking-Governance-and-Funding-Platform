import React from 'react';
import imgoverview from "../../assets/img/overview (2).png";

export default function Overview() {
  return (
    <div  className="grid grid-cols-1 lg:grid-cols-2 items-center justify-between w-full mt-16 gap-8 lg:gap-12">
        {/* Text section */}
        <div data-aos="fade-right" className="w-[100%] order-2 md:order-1 px-2 md:w-auto lg:mx-[100px] relative lg:right-10 xl:right-[80px] gap-y-3">
            <h6 className="text-[30px] md:text-[50px] w-full md:w-[550px] font-extrabold text-red1 mb-2 md:mb-5">
             About
                <span className="homeFontThin"> R2PIP</span>
            </h6>
            <p className="md:w-[610px] text-sm sm:text-base text-gray-300 py-3 md:py-6">
            The Rise2Prosperity Incentive Program (R2PIP) is a community-driven initiative that empowers individuals and businesses through education, mentorship, and collaboration. By leveraging blockchain technology, R2PIP provides transparent and secure rewards for personal and professional growth, fostering sustainable change in underserved communities.
            </p>
            <div className="text-sm md:text-base flex flex-col gap-y-1 py-3 md:py-6">
                <button className='text-white bg-red1 px-3 py-2 rounded-lg w-1/2'>Get Started</button>

            </div>
        </div>

        {/* Image section */}
        <div data-aos="fade-left" className="flex order-1 md:order-2 justify-center lg:justify-end">
            <img src={imgoverview} alt="hero" className="w-full h-auto max-w-[500px]" />
        </div>
    </div>
);
}
