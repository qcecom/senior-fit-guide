import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      {/* Tiêu đề chính */}
      <section className="space-y-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
          Stay Active, Healthy, and Independent with Senior Fit Guide
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          90% of adults over 60 face muscle loss (sarcopenia). Our science-backed tips — from nutrition to fitness — help seniors stay strong and independent.
        </p>
      </section>

      {/* Explore Senior Health Topics */}
      <section>
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 text-center mb-6">
          Explore Senior Health Topics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              to: '/senior-health',
              title: 'Senior Health Care',
              desc: 'Learn about superfoods like black sesame to prevent muscle loss.',
            },
            {
              to: '/health-insurance',
              title: 'Health Insurance',
              desc: 'Explore the best insurance options for seniors.',
            },
            {
              to: '/home-health-care',
              title: 'Home Health Care',
              desc: 'Find quality in-home care solutions.',
            },
            {
              to: '/videos',
              title: 'Videos',
              desc: 'Watch fitness and nutrition videos to boost your health.',
            },
            {
              to: '/blog',
              title: 'Blog',
              desc: 'Read expert tips on healthy aging and senior wellness.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-md">
              <Link to={item.to} className="text-blue-600 font-semibold text-lg hover:underline block mb-1">
                {item.title}
              </Link>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Video */}
      <section>
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 text-center mb-4">
          Featured Video: Strengthen Your Legs After 60
        </h2>
        <p className="text-base md:text-lg text-gray-600 text-center max-w-xl mx-auto mb-6">
          Watch “10 Surprising Foods That Strengthen Your Legs After 60 – No Gym Required!” Featuring salmon, blueberries, and more.
        </p>
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/ocJ3me7gYDI"
            title="10 Surprising Foods That Strengthen Your Legs After 60"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>

      {/* Product Offers */}
      <section>
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 text-center mb-6">
          Support Your Loved Ones' Health
        </h2>
        <p className="text-base md:text-lg text-gray-600 text-center max-w-xl mx-auto mb-6">
          Get our ebooks and checklists designed to save time and improve senior health — backed by science.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: '30-Day Meal Plan Ebook',
              desc: 'Manage high blood pressure in seniors with our 30-day recipe plan. Price: $10',
              link: '[Gumroad Link]',
            },
            {
              title: 'Daily Sleep Checklist',
              desc: 'Printable checklist to help seniors sleep better with small daily habits. Price: $5',
              link: '[Gumroad Link]',
            },
            {
              title: 'Bundle: Ebook + Checklist',
              desc: 'Get both for $15. <strong>20% off for first 50 buyers!</strong>',
              link: '[Gumroad Link]',
            },
          ].map((product, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
              <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: product.desc }}></p>
              <a
                href={product.link}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
