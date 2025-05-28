import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { initGA, logPageView } from './analytics';

// Lazy-load các thành phần
const Home = lazy(() => import('./Home'));
const Shop = lazy(() => import('./Shop'));
const SeniorHealth = lazy(() => import('./SeniorHealth'));
const HealthInsurance = lazy(() => import('./HealthInsurance'));
const HomeHealthCare = lazy(() => import('./HomeHealthCare'));
const Videos = lazy(() => import('./Videos'));
const Blog = lazy(() => import('./Blog'));
const Contact = lazy(() => import('./Contact'));
const Ebook = lazy(() => import('./Ebook')); // Thêm import cho Ebook

const App = () => {
  // Gọi Google Analytics khi load trang
  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Suspense
          fallback={
            <div className="text-center p-6">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-2 text-gray-600">Loading...</p>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/senior-health" element={<SeniorHealth />} />
            <Route path="/health-insurance" element={<HealthInsurance />} />
            <Route path="/home-health-care" element={<HomeHealthCare />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ebook" element={<Ebook />} /> {/* Thêm route cho Ebook */}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
