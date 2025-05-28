import React, { useState, useEffect } from 'react';
import { OutboundLink } from 'react-ga';
import Modal from 'react-modal';
import { Helmet } from 'react-helmet';

Modal.setAppElement('#root');

const Ebook = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Pop-up hiện sau 10s
  useEffect(() => {
    const timer = setTimeout(() => setModalIsOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Countdown timer (48h)
  const [timeLeft, setTimeLeft] = useState(48 * 3600);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>30-Day Meal Plan for Seniors with High Blood Pressure</title>
        <meta
          name="description"
          content="Discover a 30-day meal plan designed for seniors to manage high blood pressure with low-sodium, heart-healthy recipes."
        />
        <meta
          name="keywords"
          content="senior meal plan, high blood pressure, healthy eating, ebook for seniors"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          30-Day Meal Plan for Seniors: Control High Blood Pressure with Ease
        </h1>
        <img
          src="/assets/ebook-mockup.png"
          alt="Ebook Mockup"
          className="w-full max-w-md mx-auto mb-4 rounded"
        />
        <p className="text-lg mb-4">
          Get your heart-healthy meal plan for only $10 (20% off for first 50 customers)!
        </p>
        <p className="text-red-600 font-semibold mb-4">
          Offer ends in: {hours}h {minutes}m {seconds}s
        </p>
        <OutboundLink
          eventLabel="buy_ebook_hero"
          to="https://gumroad.com/l/30-day-meal-plan"
          target="_blank"
          className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
        >
          Buy Now
        </OutboundLink>
      </section>

      {/* What You'll Get Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What You'll Get</h2>
        <ul className="list-disc pl-6">
          <li>30-day meal plan with low-sodium, heart-healthy recipes.</li>
          <li>Convenient grocery shopping lists for each week.</li>
          <li>Nutrition tips tailored for seniors (60+).</li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Why Choose This Plan?</h2>
        <ul className="list-disc pl-6">
          <li>Low-sodium recipes to manage high blood pressure.</li>
          <li>Heart-healthy meals to boost energy and wellness.</li>
          <li>Easy-to-follow instructions for seniors and caregivers.</li>
        </ul>
      </section>

      {/* Testimonial Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">What People Are Saying</h2>
        <blockquote className="border-l-4 border-blue-600 pl-4">
          <p>"This meal plan made managing my blood pressure so much easier! The recipes are simple and delicious." – Sarah, 68</p>
        </blockquote>
      </section>

      {/* CTA Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Start Your Journey Today</h2>
        <OutboundLink
          eventLabel="buy_ebook_cta"
          to="https://gumroad.com/l/30-day-meal-plan"
          target="_blank"
          className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
        >
          Buy Now ($10)
        </OutboundLink>
      </section>

      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Who is this ebook for?</h3>
            <p>Seniors (60+) with high blood pressure and their caregivers.</p>
          </div>
          <div>
            <h3 className="font-semibold">How do I receive the ebook?</h3>
            <p>You’ll get a PDF download link via email after purchasing on Gumroad.</p>
          </div>
          <div>
            <h3 className="font-semibold">Is there a refund policy?</h3>
            <p>Yes, we offer a 7-day money-back guarantee if you’re not satisfied.</p>
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
        <p>
          Check out our <a href="/blog" className="text-blue-600 hover:underline">Blog</a> and{' '}
          <a href="/videos" className="text-blue-600 hover:underline">Videos</a> for more health tips!
        </p>
      </section>

      {/* Pop-up Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="bg-white p-6 rounded-lg max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Special Offer!</h2>
        <p className="mb-4">Get 20% off your ebook for being one of the first 50 customers!</p>
        <OutboundLink
          eventLabel="buy_ebook_popup"
          to="https://gumroad.com/l/30-day-meal-plan"
          target="_blank"
          className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700"
        >
          Claim Offer
        </OutboundLink>
        <button
          onClick={() => setModalIsOpen(false)}
          className="ml-4 text-gray-600 hover:underline"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Ebook;
