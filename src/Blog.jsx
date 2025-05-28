import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Senior Health Blog: Tips for a Healthier, Happier Life</h1>
      
      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Our Blog</h2>
        <p className="text-gray-600 leading-relaxed">
          Welcome to the Senior Fit Guide Blog! Find expert tips on senior health, nutrition, and wellness to help you live a healthier, happier life after 60.
        </p>
      </section>

      {/* New Article */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">High Blood Pressure Diet for Seniors: A Simple Meal Plan</h2>
        <p className="text-gray-600 leading-relaxed">
          High blood pressure affects 1 in 3 seniors. Foods like avocados and berries can help reduce it naturally by lowering cholesterol and inflammation.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Get the full '30-Day Meal Plan for Seniors with High Blood Pressure' ebook with recipes and a checklist! Only $10! <a href="[Gumroad Link]" className="text-blue-600 hover:underline">Buy Now</a>
        </p>
      </section>

      {/* Featured Articles */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Black Sesame: The Surprising Superfood to Prevent Muscle Loss</h3>
            <p className="text-gray-600">Black sesame helps reduce muscle loss and leg pain for seniors.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">7 Fruits Seniors Should Avoid to Boost Leg Strength After 65</h3>
            <p className="text-gray-600">Avoid fruits like pineapple and bananas to improve leg strength.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Japan's Longevity Secrets for Living to 105</h3>
            <p className="text-gray-600">
              Learn Dr. Shigeaki Hinohara’s habits to live longer. Want a practical meal plan? Get our ebook for $10! <a href="[Gumroad Link]" className="text-blue-600 hover:underline">Buy Now</a>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <p className="text-gray-600 mb-4">
          Explore more tips in our <Link to="/videos" className="text-blue-600 hover:underline">Videos</Link> or <Link to="/senior-health" className="text-blue-600 hover:underline">Senior Health</Link> sections.
        </p>
      </section>
    </div>
  );
};

export default Blog;