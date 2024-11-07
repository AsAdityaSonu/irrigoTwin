import React from "react";

function About() {
  return (
    <div className="min-h-screen min-w-[730px] bg-gray-50  p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-50 border-e rounded-lg shadow-lg bg-gray-50">
        <h1 className="text-5xl font-extrabold text-green-700 mb-8 text-center">
          Smart Hydroponics System
        </h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Project Overview</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our project uses <span className="font-semibold">Digital Twin Technology</span> to create a modern, sustainable hydroponics system. By building a virtual model connected to real sensors, we aim to optimize water usage, improve crop health, and increase efficiency in agriculture.
        </p>
        
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Problems Addressed</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><span className="font-semibold">Inconsistent Soil Quality:</span> Makes traditional farming challenging.</li>
          <li><span className="font-semibold">Unpredictable Weather:</span> Affects plant growth in open environments.</li>
          <li><span className="font-semibold">High Water Usage:</span> Traditional farming is water-intensive, especially in drought areas.</li>
          <li><span className="font-semibold">Manual Monitoring:</span> Time-consuming and error-prone, impacting scalability.</li>
          <li><span className="font-semibold">Scalability Issues:</span> Traditional agriculture struggles to scale effectively.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Solution</h2>
        <p className="text-lg text-gray-700 mb-6">
          By leveraging digital twin technology, we can monitor and simulate optimal plant conditions in real time. This allows for precise control of environmental factors like humidity, temperature, and nutrient levels. Our solution minimizes water and resource use, making it suitable for soil-deficient or urban areas.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-700 mb-2">Digital Twin</h3>
            <p className="text-gray-700">Creates a virtual model of the hydroponic system, mirroring physical components.</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-700 mb-2">Data Collection</h3>
            <p className="text-gray-700">Gathers real-time data from sensors to monitor environmental conditions.</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-700 mb-2">Automated Control</h3>
            <p className="text-gray-700">Adjusts environmental settings for optimal growth based on data analysis.</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-700 mb-2">Optimization</h3>
            <p className="text-gray-700">Continuously refines the model for efficiency and resource savings.</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-green-700 mb-2">User Dashboard</h3>
            <p className="text-gray-700">Provides an interface for easy monitoring and management of plant health.</p>
          </div>
        </div>

        <div className="text-lg text-gray-700 mt-8">
          <p className="text-center font-semibold">
            Thank you for your interest in our project. We’re excited to contribute to the future of sustainable agriculture!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
