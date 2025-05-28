import React from 'react';
import { Link } from 'react-router-dom';

const HealthInsurance = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Senior Health Insurance: Affordable Plans for Your Care Needs</h1>
      
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Health Insurance Matters for Seniors</h2>
        <p className="text-gray-600 leading-relaxed">
          Health insurance is a lifeline for seniors, ensuring access to quality care without breaking the bank. At Senior Fit Guide, we help you navigate senior health insurance options to find the best plan for your needs. Whether you're a caregiver or a senior, our resources make it easy to stay informed and prepared.
        </p>
      </section>

      {/* Main Article */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Guide to Choosing the Best Health Insurance for Seniors</h2>
        <p className="text-gray-600 leading-relaxed">
          Medicare is a popular option for seniors, covering hospital stays, doctor visits, and more. However, supplemental plans can fill gaps in coverage. Look for plans with low premiums and coverage for preventive care to save money in the long run. Understanding terms like "premium," "deductible," and "copay" is key to choosing the right plan.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          While insurance helps with medical costs, a healthy diet can prevent issues like high blood pressure. Check out our <a href="[Gumroad Link]" className="text-blue-600 hover:underline">'30-Day Meal Plan for Seniors with High Blood Pressure'</a> ebook for only $10!
        </p>
      </section>

      {/* Cluster Topics */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">More on Senior Health Insurance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">What Insurance Does Oak Street Health Accept for Seniors?</h3>
            <p className="text-gray-600">
              Oak Street Health accepts Medicare and many supplemental plans. Contact their support to confirm coverage for your needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Average Cost of Supplemental Health Insurance for Seniors</h3>
            <p className="text-gray-600">
              Supplemental plans typically cost $50–$200 per month, depending on coverage. Compare plans to find the best value.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-gray-600 mb-4">
          Need more health tips? Explore our <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link>, <Link to="/home-health-care" className="text-blue-600 hover:underline">Home Health Care</Link>, or <Link to="/videos" className="text-blue-600 hover:underline">Videos</Link> sections, or <Link to="/shop" className="text-blue-600 hover:underline">Shop</Link> our '30-Day Meal Plan for Seniors with High Blood Pressure' ebook to support your loved ones’ wellness.
        </p>
      </section>
    </div>
  );
};

export default HealthInsurance;