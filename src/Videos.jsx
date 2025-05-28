import React from 'react';
import { Link } from 'react-router-dom';

const Videos = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Senior Health Videos: Stay Fit and Healthy After 60</h1>
      
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Our Video Library</h2>
        <p className="text-gray-600 leading-relaxed">
          Welcome to our senior health video library! Explore fitness, nutrition, and wellness tips designed to help you stay active and healthy after 60.
        </p>
      </section>

      {/* Featured Videos */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">10 Surprising Foods That Strengthen Your Legs After 60</h3>
            <iframe
              src="https://www.youtube.com/embed/ocJ3me7gYDI"
              title="10 Surprising Foods That Strengthen Your Legs After 60"
              frameBorder="0"
              allowFullScreen
              className="w-full h-64"
            ></iframe>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Hydration for Seniors: 4 Drinks to Boost Muscle Recovery</h3>
            <iframe
              src="https://www.youtube.com/embed/PNgoKPMgh18"
              title="Hydration for Seniors: 4 Drinks to Boost Muscle Recovery"
              frameBorder="0"
              allowFullScreen
              className="w-full h-64"
            ></iframe>
            <p className="text-gray-600 mt-2">
              Learn more hydration tips with our <a href="[Gumroad Link]" className="text-blue-600 hover:underline">'Daily Checklist to Improve Sleep for Seniors'</a> for only $5!
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-gray-600 mb-4">
          Subscribe to our <a href="https://www.youtube.com/@ForeverHealthyYT/" className="text-blue-600 hover:underline">YouTube channel</a> for more videos, or <Link to="/shop" className="text-blue-600 hover:underline">Shop</Link> our health products for practical solutions.
        </p>
      </section>
    </div>
  );
};

export default Videos;