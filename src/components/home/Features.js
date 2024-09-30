import { FaGraduationCap, FaHandshake, FaChartLine } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

const Features = () => {
  const featureData = [
    {
      id: 1,
      title: "Incentivized Learning",
      description: "Earn rewards as you complete educational modules, receive mentorship, and contribute to your community.",
      icon: <FaGraduationCap size={40} />
    },
    {
      id: 2,
      title: "Blockchain-Based Rewards",
      description: "Benefit from secure, transparent, and automated rewards distribution through smart contracts.",
      icon: <FaChartLine size={40} />
    },
    {
      id: 3,
      title: "Business Collaboration",
      description: "Engage with local businesses, build networks, and gain access to exclusive opportunities.",
      icon: <FaHandshake size={40} />
    },
    {
      id: 4,
      title: "Community Empowerment",
      description: "Make a positive impact in your community while advancing your career and personal development.",
      icon: <BsFillPeopleFill size={40} />
    }
  ];

  return (
    <div  data-aos="zoom-in-up" className="w-full py-10 mt-12 md:mt-24">
      <div className="container mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature) => (
            <div
              key={feature.id}
              className={` border-red1 border-2 p-6 rounded-xl shadow-xl hover:shadow-xl transition-shadow duration-300 ${feature.id % 2 === 0 ? 'md:mt-12' : 'md:mb-12'}`}
            >
              <div className="flex flex-col px-2 gap-3">
                {/* Icon */}
                <div className="mb-4 text-red1 flex items-center justify-center">{feature.icon}</div>
                {/* Title */}
                <h3 className="text-xl text-white font-semibold mb-2">{feature.title}</h3>
                {/* Description */}
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
