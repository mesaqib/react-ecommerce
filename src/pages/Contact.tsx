import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const Contact = () => {
  return (
    <div className="px-10 py-8">
      <Breadcrumb />

      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600">
          We'd love to hear from you. Reach out with questions, feedback, or just say hello.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div className="text-left space-y-6">
          <div>
            <h2 className="text-xl font-semibold">Address</h2>
            <p className="text-gray-700">123 Main Street, New Delhi, India</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Phone</h2>
            <p className="text-gray-700">+91 98765 43210</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Email</h2>
            <p className="text-gray-700">support@example.com</p>
          </div>
        </div>

        {/* Contact Form (no logic) */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full mt-1 px-4 py-2 border rounded-md outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full mt-1 px-4 py-2 border rounded-md outline-none resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
