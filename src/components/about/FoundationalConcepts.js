import React from 'react';
import { SiTruenas } from "react-icons/si";
import { RiTeamLine } from "react-icons/ri";
import { LiaThinkPeaks } from "react-icons/lia";

export default function FoundationalConcepts() {
  const featureData = [
    {
      id: 1,
      title: "Consideration",
      description:
        "We encourage empathy and mindfulness in all interactions.",
      icon: < LiaThinkPeaks size={30}/>
    },
    {
      id: 2,
      title: "Cooperation",
      description:
        "We believe in the power of collaboration for mutual success.",
      icon: < RiTeamLine size={30} />
    },
    {
      id: 3,
      title: "Commitment",
      description:
        "We are dedicated to long-term growth and development for all participants.",
      icon: <SiTruenas size={30} />, 
    },
  ];

  return (
    <div data-aos="zoom-in-up" className=" py-16 px-4">
      <h1 className="text-4xl font-bold  mb-8 text-red1 py-6">
        Foundational Concepts
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
        {featureData.map((feature) => (
          <div
            key={feature.id}
            className={`border-red1 border-2 p-6 rounded-xl shadow-xl hover:shadow-xl transition-shadow duration-300 ${feature.id % 2 !== 0 ? 'md:mt-12' : 'md:mb-12'}`}
          >
            <div className="flex flex-col px-2 gap-3">
              {/* Icon */}
              <div className="mb-4 text-red1 text-6xl">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-xl text-white font-semibold mb-2">{feature.title}</h3>
              {/* Description */}
              <p className="text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
