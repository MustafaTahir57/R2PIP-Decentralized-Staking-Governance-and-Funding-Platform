import React from 'react';

export default function BusinessInstructions() {
  const steps = [
    {
      id: 1,
      title: "Partner with Us",
      description: "Register your business and become a part of the R2PIP network. Contribute by offering services, mentorship, or opportunities to participants.",
      icon: "🤝", // Partner icon
    },
    {
      id: 2,
      title: "Engage with the Community",
      description: "Collaborate with participants and other businesses to foster growth and development within the community.",
      icon: "🌐", // Engage icon
    },
    {
      id: 3,
      title: "Benefit from the Program",
      description: "Enhance your brand reputation, gain customer loyalty, and access a pool of skilled professionals ready to join your team.",
      icon: "🎯", // Benefit icon
    },
  ];

  return (
    <div data-aos="zoom-out-down" className="py-16 px-6  text-white">
      <h1 className="text-4xl font-bold text-red-600 my-12">Instructions for Businesses</h1>
      
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12">
        {steps.map((step) => (
          <div key={step.id} className="border-2 border-red1 p-6 rounded-xl shadow-lg flex flex-col gap-6">
            <div className="text-6xl mb-4">{step.icon}</div>
            <h2 className="text-2xl font-bold mb-2 text-red-600">{step.title}</h2>
            <p className="text-gray-300">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
