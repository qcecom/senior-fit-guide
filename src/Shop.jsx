import React from 'react';
import { Link } from 'react-router-dom';

function Shop() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6 text-center">Shop Senior Health Products: Practical Solutions for Caregivers and Seniors</h1>
            
            {/* Introduction */}
            <section className="mb-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Support Your Loved Ones' Health</h2>
                <p className="text-gray-600 leading-relaxed">
                    Looking for practical solutions to improve your loved ones' health? Our senior health products, like the '30-Day Meal Plan for Seniors with High Blood Pressure,' offer simple, science-backed strategies to save you time and reduce stress.
                </p>
            </section>

            {/* Featured Products */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">30-Day Meal Plan for Seniors with High Blood Pressure - Ebook</h3>
                        <p className="text-gray-600 mb-4">
                            A detailed 30-day meal plan with recipes to manage high blood pressure in seniors. Based on WHO and CDC guidelines. Price: $10
                        </p>
                        <a href="[Gumroad Link]" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            Buy Now
                        </a>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Daily Checklist to Improve Sleep for Seniors</h3>
                        <p className="text-gray-600 mb-4">
                            A printable checklist to help seniors sleep better with simple daily steps. Price: $5
                        </p>
                        <a href="[Gumroad Link]" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            Buy Now
                        </a>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Bundle: Ebook + Checklist</h3>
                        <p className="text-gray-600 mb-4">
                            Get both the meal plan and checklist for a discounted price of $15. <strong>20% off for the first 50 buyers!</strong>
                        </p>
                        <a href="[Gumroad Link]" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                            Buy Now
                        </a>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="mb-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">Join Thousands of Happy Customers</h2>
                <p className="text-gray-600 mb-4">
                    "This meal plan helped my dad so much! - John, 38." Trusted by over 5,000 subscribers on YouTube!
                </p>
                <p className="text-gray-600">
                    Shop now to help your loved ones live healthier and happier lives!
                </p>
            </section>

            {/* Call to Action */}
            <section className="text-center">
                <p className="text-gray-600 mb-4">
                    Want more health tips? Explore our <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link> or <Link to="/videos" className="text-blue-600 hover:underline">Videos</Link> sections.
                </p>
            </section>
        </div>
    );
}

export default Shop;