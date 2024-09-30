import React from 'react';

export default function Mission() {
  return (
    <div data-aos="fade-right" className=" text-white pt-16 px-4 relative flex flex-col md:flex-row items-center justify-normal gap-5">
      <div className="w-[95%] md:w-[50%]">
        <h1 className="text-4xl font-bold text-red1">Mission</h1>
        <p className="text-lg mt-4">
          Ensure the right selection of solutions, and ensure the right procedure
          of application as part of a customer-focused approach and quest for
          impeccable quality.
        </p>
      </div>
      {/* Line with dot */}
      <div className=" flex items-center">
        <div className="w-32 h-0.5 bg-red1"></div>
        <div className="w-4 h-4 bg-red1 rounded-full ml-2"></div>
      </div>
    </div>
  );
}
