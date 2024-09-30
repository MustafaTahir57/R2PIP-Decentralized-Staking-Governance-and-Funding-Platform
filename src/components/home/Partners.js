import React from "react";
import img1 from "../../assets/img/partner1.jpg";
import img2 from "../../assets/img/partner2.jpg";
import img3 from "../../assets/img/partner3.jpg";
import img4 from "../../assets/img/partner4.jpg";

const Partners = () => {
  const partnerLogos = [
    {
      id: 0,
      img: img1,
      desc: "Earn rewards for doing educational modules, receive mentorship, and community contributions",
    },
    {
      id: 1,
      img: img2,
      desc: "Enjoy rewards and benefits automatically distributed using transparent and secure smart contracts",
    },
    {
      id: 2,
      img: img3,
      desc: "Engage with local businesses, build networks, and gain access to exclusive opportunities.",
    },
    {
      id: 3,
      img: img4,
      desc: "Make a positive impact in your community while advancing your career and personal development.",
    },
  ];

  return (
    <section
      id="partner"
       data-aos="zoom-in"
      className="flex flex-col justify-center w-full relative rounded-t-[75px] px-4 pb-20 pt-10 bottom-6"
    >
      <h6 className="text-center text-[30px] md:text-[40px] lg:text-[50px] text-red1 font-bold pb-12">
        Benefits
      </h6>
   
      {/* Partner Logos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  w-full pb-5 gap-x-3 sm:gap-x-10 gap-y-12 sm:gap-y-16">
        {partnerLogos.map((data) => (
          <div className="flex flex-col items-center justify-center">
          <img
            key={data.id}
            className="transition-all object-cover w-64 h-64 rounded-full grayscale duration-300 cursor-pointer opacity-60 hover:opacity-90"
            src={data.img}
            alt={`Partner ${data.id}`}
          />

          <p className="text-gray-300 text-center">{data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
