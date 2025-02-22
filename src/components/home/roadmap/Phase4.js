import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const Phase4 = () => {
  // Set percentage for the circle fill (for example, 75%)
  const percentage = "Phase-4";

  return (
    <section className="flex flex-col items-center justify-center w-full py-3 gap-y-8">
      {/* phase 2 */}
      <div
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="100"
        className="flex flex-col items-center justify-between w-full gap-y-10 md:w-[90%] lg:w-[82%] py-16 xl:w-[75%] md:gap-0 md:flex-row-reverse"  // Use md:flex-row-reverse for placing circle on left
      >
        {/* Circle Progress on the left for larger screens */}
        <div
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="100"
          className="relative w-40 h-40 flex justify-center items-center md:order-1" // Circle comes first
        >
          {/* Circle Outline */}
          <div className="w-full h-full rounded-full border-4 border-gray-500"></div>

          {/* Circle Fill */}
          <div
            className={`absolute w-full h-full rounded-full border-4 border-red1 transform origin-center ${getCircleFill(percentage)}`}
          ></div>

          {/* Percentage Number */}
          <div className="absolute text-2xl font-bold text-white">
            {percentage}
          </div>
        </div>

        {/* Phase 2 Card Content */}
        <div className="flex flex-col items-center border-2 border-red1 p-4 rounded-xl md:items-start justify-center gap-y-8 w-fit min-w-[290px] max-w-[290px]">
          <h1 className="text-red1 text-3xl font-extrabold">Phase 4</h1>
          <div className="flex flex-col items-start gap-y-2">
            {[
              "Re-Assess",
              "Re-Evaluate",
              "Launch LMS",
            ].map((item, idx) => (
              <div className="flex items-center gap-x-2" key={idx}>
                <IoCheckmarkSharp size={20} className="text-green-400" />
                <h6 className="text-gray-300 py-2">{item}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
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

export default Phase4;
