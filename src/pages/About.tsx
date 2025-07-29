import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const About = () => {
  return (
    <div className="px-10 py-8">
      <Breadcrumb />

      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600">
          We are a passionate team committed to building beautiful and functional websites that deliver results. From design to development, we craft user experiences with care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
        <img
          src="https://via.placeholder.com/500x300"
          alt="About us"
          className="rounded-xl shadow-md"
        />

        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission is to simplify web development and empower creators through intuitive design, clean code, and robust technology.
          </p>

          <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Clarity and simplicity in every product</li>
            <li>Customer-first thinking</li>
            <li>Continuous learning and innovation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
