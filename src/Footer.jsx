import React from 'react';
import { Link } from 'react-router-dom'; // Thêm Link để sử dụng cho các liên kết nội bộ

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <section className="text-center bg-gray-100 text-gray-800 py-8 rounded-lg mb-8">
                    <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
                    <p className="text-lg mb-6">
                        Stay updated with the latest senior health tips. Subscribe to our channel, follow us on social media, or shop our health products for more resources!
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link to="/videos" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                            Subscribe to Our Channel
                        </Link>
                        <a href="https://www.facebook.com/ForeverHealthyYT/" className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition">
                            Follow on Facebook
                        </a>
                        <Link to="/shop" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                            Shop Health Products
                        </Link>
                    </div>
                </section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Senior Fit Guide</h3>
                        <p className="text-gray-300">
                            Senior Fit Guide is your trusted resource for senior health, offering science-backed tips on nutrition, fitness, and wellness to help you live a healthier, happier life.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/senior-health" className="hover:text-blue-300 transition">Senior Health</Link></li>
                            <li><Link to="/health-insurance" className="hover:text-blue-300 transition">Health Insurance</Link></li>
                            <li><Link to="/home-health-care" className="hover:text-blue-300 transition">Home Health Care</Link></li>
                            <li><Link to="/videos" className="hover:text-blue-300 transition">Videos</Link></li>
                            <li><Link to="/blog" className="hover:text-blue-300 transition">Blog</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-300 transition">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2">
                            <li><a href="https://www.facebook.com/ForeverHealthyYT/" className="hover:text-blue-300 transition">Facebook</a></li>
                            <li><a href="https://www.youtube.com/@ForeverHealthyYT/" className="hover:text-blue-300 transition">YouTube</a></li>
                            <li><a href="https://x.com/SeniorFitTips" className="hover:text-blue-300 transition">X</a></li>
                            <li><a href="https://www.pinterest.com/healthyforeverYT/" className="hover:text-blue-300 transition">Pinterest</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center text-gray-400">
                    <p>Disclaimer: This website is for informational purposes only. Always consult a healthcare professional before making changes to your diet or lifestyle.</p>
                    <p>© 2025 Senior Fit Guide. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;