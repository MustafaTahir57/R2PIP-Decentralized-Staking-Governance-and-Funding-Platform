import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const Phase1 = () => {
  // Set percentage for the circle fill (for example, 75%)
  const percentage = 75;

  return (
    <div className="flex flex-col bg-[#300931]/70 items-center justify-center w-full py-3  rounded-t-[75px] gap-y-8 ">
      <h6 className="text-[35px] sm:text-[50px] md:text-[65px] font-bold capitalize pb-5">
        Road Map
      </h6>

      {/* phase 1 */}
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="100"
        className="flex flex-col items-center justify-between w-full gap-y-10 md:w-[90%] lg:w-[82%]  py-16 xl:w-[75%] md:gap-0 md:flex-row "
      >
        <div className="flex flex-col items-center  md:items-start justify-center gap-y-8 w-full  md:w-[50%]">
          <h1 className=" text-[white] text-3xl md:text-4xl  xl:text-6xl font-extrabold text-gray-200 ">
            Phase 1
          </h1>
          <div className="flex flex-col items-start gap-y-2">
            {[
              "Launch of the token",
              "Website goes live",
              "NFT collection with built-in utility",
              "Staking options for NFTs",
              "Launch of the marketplace",
              "Achieve a market cap of $500k"
            ].map((item, idx) => (
              <div className="flex items-center gap-x-2" key={idx}>
                <IoCheckmarkSharp size={30} className="text-green-400" />
                <h6>{item}</h6>
              </div>
            ))}
          </div>
        </div>

        {/* Circle Progress */}
        <div
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="100"
          className="relative w-40 h-40 flex justify-center items-center"
        >
          {/* Circle Outline */}
          <div className="w-full h-full rounded-full border-4 border-gray-500"></div>

          {/* Circle Fill */}
          <div
            className={`absolute w-full h-full rounded-full border-4 transform origin-center ${getCircleFill(percentage)}`}
          ></div>

          {/* Percentage Number */}
          <div className="absolute text-2xl font-bold text-white">
            {percentage}%
          </div>
        </div>
      </div>
    </div>
  );
};

// Utility function to get the correct fill class based on the percentage
function getCircleFill(percentage) {
  switch (percentage) {
    case 25:
      return "border-transparent border-t-red1";
    case 50:
      return "border-red1 border-r-transparent border-t-transparent";
    case 75:
      return "border-red1 border-b-transparent";
    case 100:
      return "border-red1";
    default:
      return "";
  }
}

export default Phase1;
