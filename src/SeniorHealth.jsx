import React from 'react';
import { Link } from 'react-router-dom';

const SeniorHealth = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Senior Health Care: Your Guide to Wellness and Independence</h1>
      
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Importance of Senior Health Care</h2>
        <p className="text-gray-600 leading-relaxed">
          Senior health care is crucial for maintaining independence as we age. With over 37 million Americans facing chronic kidney disease (CKD), often due to poor diet, it's time to take action. At Senior Fit Guide, we provide expert tips on wellness, nutrition, and mobility to help seniors live healthier lives.
        </p>
      </section>

      {/* Main Article */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10 Foods to Rebuild Muscle Strength for Seniors | Prevent Sarcopenia</h2>
        <p className="text-gray-600 leading-relaxed">
          Sarcopenia affects 90% of people over 60, leading to muscle loss. Here are some foods to help: Fatty fish like salmon provide omega-3s, eggs are perfect for muscle repair, and berries aid recovery with antioxidants.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Want a detailed plan to support muscle health? Check out our <a href="[Gumroad Link]" className="text-blue-600 hover:underline">'30-Day Meal Plan for Seniors with High Blood Pressure'</a> ebook for only $10!
        </p>
      </section>

      {/* Cluster Topics */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">More Senior Health Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Hydration for Seniors: 4 Drinks to Boost Muscle Recovery</h3>
            <p className="text-gray-600">
              Water, electrolyte drinks, herbal teas, and bone broth can help seniors recover faster. Avoid sugary drinks to prevent dehydration.
            </p>
            <p className="text-gray-600 mt-2">
              Learn more hydration tips with our <a href="[Gumroad Link]" className="text-blue-600 hover:underline">'Daily Checklist to Improve Sleep for Seniors'</a> for only $5!
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Essential Nutrients for Healthy Aging</h3>
            <p className="text-gray-600">
              Vitamin D, omega-3s, and protein are crucial for seniors to maintain energy and strength.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeniorHealth;