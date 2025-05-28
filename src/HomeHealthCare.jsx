import React from 'react';
import { Link } from 'react-router-dom';

const HomeHealthCare = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Home Health Care for Seniors: Stay Independent with Quality Care</h1>
      
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Growing Need for Home Health Care</h2>
        <p className="text-gray-600 leading-relaxed">
          Home health care is a growing need for seniors who want to maintain their independence. At Senior Fit Guide, we explore the best in-home care options to support your lifestyle. From daily assistance to health monitoring, quality care can make all the difference.
        </p>
      </section>

      {/* Main Article */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Senior Home Care: Avoid This Water Habit to Prevent Cancer</h2>
        <p className="text-gray-600 leading-relaxed">
          Did you know that gulping cold water can shock your system and increase cancer risk? Inspired by Barbara O’Neill, here are three fixes: drink room-temperature water, sip slowly, and rinse your mouth first to reduce bacterial risks.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Proper hydration is key to senior health. Learn more with our <a href="[Gumroad Link]" className="text-blue-600 hover:underline">'Daily Checklist to Improve Sleep for Seniors'</a> for only $5!
        </p>
      </section>

      {/* Cluster Topics */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">More on Home Health Care</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Does Medicare Pay for Home Health Care for Seniors?</h3>
            <p className="text-gray-600">
              Medicare often covers home health care services like nursing and therapy. Check eligibility with your provider.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Free Home Health Care for Seniors: What You Need to Know</h3>
            <p className="text-gray-600">
              Some programs offer free home health care for low-income seniors. Visit your local agency to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-gray-600 mb-4">
          Explore more care tips in our <Link to="/videos" className="text-blue-600 hover:underline">Videos</Link>, <Link to="/health-insurance" className="text-blue-600 hover:underline">Health Insurance</Link>, or <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link> sections, or <Link to="/shop" className="text-blue-600 hover:underline">Shop</Link> our health products to support your loved ones.
        </p>
      </section>
    </div>
  );
};

export default HomeHealthCare;