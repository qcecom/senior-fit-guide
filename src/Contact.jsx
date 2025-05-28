import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Contact Us: Let's Support Your Senior Health Journey</h1>
      
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-600 leading-relaxed">
          Have questions about senior health? Contact Senior Fit Guide for support, inquiries, or feedback. We're here to help you stay healthy and active!
        </p>
      </section>

      {/* Contact Form */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                id="message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Submit
            </button>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/ForeverHealthyYT/" className="text-blue-600 hover:underline">Facebook</a>
          <a href="https://www.youtube.com/@ForeverHealthyYT/" className="text-blue-600 hover:underline">YouTube</a>
          <a href="https://x.com/SeniorFitTips" className="text-blue-600 hover:underline">X</a>
          <a href="https://www.pinterest.com/healthyforeverYT/" className="text-blue-600 hover:underline">Pinterest</a>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-gray-600 mb-4">
          Looking for practical health solutions? <Link to="/shop" className="text-blue-600 hover:underline">Shop</Link> our '30-Day Meal Plan for Seniors with High Blood Pressure' ebook for only $10!
        </p>
      </section>
    </div>
  );
};

export default Contact;