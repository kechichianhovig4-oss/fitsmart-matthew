import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation handler with delay
  const handleNavClick = (path) => {
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 300);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-emerald-50 font-display text-gray-900">
      {/* Add Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Header - Updated with emerald colors */}
          <header className="sticky top-0 z-50 bg-emerald-50/80 backdrop-blur-sm">
            <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-emerald-200 px-4 sm:px-10 lg:px-20 py-3">
              <div className="flex items-center gap-4 text-gray-900">
                <Link 
                  to="/" 
                  onClick={() => handleNavClick('/')}
                  className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="size-8 text-emerald-600">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
                      <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fill="currentColor" fillRule="evenodd"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-bold leading-tight tracking-[-0.015em]">FitSmart Matthew</h2>
                </Link>
              </div>
              
              <div className="hidden lg:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <Link 
                    to="/HomePage" 
                    onClick={() => handleNavClick('/HomePage')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-emerald-600 transition-colors"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/Services" 
                    onClick={() => handleNavClick('/Services')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-emerald-600 transition-colors"
                  >
                    Services
                  </Link>
                  <span className="text-emerald-600 text-sm font-bold leading-normal">About</span>
                </div>
                <Link 
                  to="/Contact" 
                  onClick={() => handleNavClick('/Contact')}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-emerald-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-emerald-700 transition-all"
                >
                  <span className="truncate">Book Now</span>
                </Link>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button 
                  onClick={toggleMobileMenu}
                  className="text-gray-900 p-2"
                >
                  <span className="material-symbols-outlined">
                    {isMobileMenuOpen ? 'close' : 'menu'}
                  </span>
                </button>
              </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-emerald-50 border-b border-emerald-200 shadow-lg">
                <div className="px-4 py-6 space-y-4">
                  <div className="space-y-3">
                    <Link 
                      to="/HomePage" 
                      onClick={() => handleNavClick('/HomePage')}
                      className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-emerald-600 transition-colors"
                    >
                      Home
                    </Link>
                    <Link 
                      to="/Services" 
                      onClick={() => handleNavClick('/Services')}
                      className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-emerald-600 transition-colors border-t border-emerald-100"
                    >
                      Services
                    </Link>
                    <div className="px-2 py-3 border-t border-emerald-100">
                      <span className="text-emerald-600 text-sm font-bold leading-normal">About</span>
                    </div>
                  </div>
                  <Link 
                    to="/Contact" 
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-emerald-600 text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-emerald-700 transition-all mt-4"
                  >
                    <span className="truncate">Book Now</span>
                  </Link>
                </div>
              </div>
            )}
          </header>

          {/* Main Content */}
          <main className="flex-1">
            {/* Hero Section with Background Image */}
            <section className="relative px-4 sm:px-10 lg:px-20 py-32 overflow-hidden">
              {/* Background Image with gradient overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://i.imgur.com/Dp6gNkH.jpeg"
                  alt="Matthew, founder and head coach of FitSmart Matthew"
                  className="w-full h-full object-cover object-top"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
                    maskImage: 'linear-gradient(to top, transparent 0%, black 20%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-50 via-emerald-50/80 to-transparent"></div>
              </div>
              
              <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h1 className="text-gray-900 text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] mb-4">About Matthew</h1>
                <p className="text-emerald-600 text-xl md:text-2xl font-semibold">Founder & Head Coach, FitSmart Matthew</p>
              </div>
            </section>

            {/* Content Section - Two Column Layout for First Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-12 -mt-20 relative z-10">
              <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="space-y-8">
                    {/* The Athlete's Foundation - Two Column Layout */}
                    <div className="flex flex-col lg:flex-row gap-12">
                      {/* Image Column */}
                      <div className="lg:w-2/5">
                        <div className="sticky top-24">
                          <img 
                            src="https://i.imgur.com/vEtIKXx.jpeg" 
                            alt="Matthew - FitSmart Matthew Founder" 
                            className="w-full h-auto rounded-lg shadow-lg object-cover"
                          />
                          {/* Introduction */}
                          <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Hello, I'm Matthew</h3>
                            <p className="text-gray-700 leading-relaxed">
                              My name is Matthew, and my life has been shaped by high-performance environments. As a former professional college football player, I learned what it takes to push a body to its absolute limits—and, most importantly, how to train it to recover, adapt, and come back stronger.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Text Column */}
                      <div className="lg:w-3/5">
                        <div>
                          <h2 className="text-gray-900 text-2xl font-bold border-b border-emerald-200 pb-3 mb-6">The Athlete's Foundation</h2>
                          <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            In the beginning, there was a field, a ball, and a dream. I didn't know it then, but every sprint, every drill, every moment of pushing past 'I can't' was building more than muscle—it was building a philosophy. Football taught me that discipline isn't restriction; it's the framework for freedom. That lesson became my north star.
                          </p>
                          
                          {/* Quote Card */}
                          <div className="my-8 p-6 border-l-4 border-emerald-600 bg-emerald-50 rounded-r-lg">
                            <p className="text-xl font-semibold italic text-gray-900 leading-snug">
                              "I don't just train bodies—I translate athletic excellence into everyday achievement."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* The Transition - Full Width Below */}
                    <div className="mt-16 pt-8 border-t border-emerald-200">
                      <h2 className="text-gray-900 text-2xl font-bold border-b border-emerald-200 pb-3 mb-6">The Transition</h2>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        When the final whistle blew on my playing days, I faced the question every athlete dreads: 'What now?' But here's what they don't tell you: the field was just the beginning. I realized my real purpose wasn't in the plays I memorized, but in the principles I lived by. The same focus that helped me read defenses could help others overcome their own obstacles. The resilience that carried me through fourth quarters could empower someone through their first month in the gym.
                      </p>
                    </div>

                    {/* The Coach's Mission */}
                    <div className="mt-12">
                      <h2 className="text-gray-900 text-2xl font-bold border-b border-emerald-200 pb-3 mb-4">The Coach's Mission</h2>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        That's when FitSmart Matthew was born—not as a business plan, but as a translation. How do you take elite performance principles and make them accessible? How do you translate pro-level intensity into sustainable, everyday progress? The answer was simple: meet people where they are, but never leave them there.
                      </p>
                    </div>

                    {/* Additional Content */}
                    <div className="mt-12">
                      <h2 className="text-gray-900 text-2xl font-bold border-b border-emerald-200 pb-3 mb-4">My Philosophy</h2>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Every client who walks through my door gets more than a workout plan. They get a partner in their journey—someone who understands that true transformation happens when we build on strengths, work through limitations, and celebrate every step forward. Whether you're taking your first fitness class or training for a marathon, my approach remains the same: listen first, coach second, and always lead with empathy.
                      </p>
                    </div>

                    {/* Credentials */}
                    <div className="mt-12 bg-emerald-50 p-8 rounded-lg">
                      <h3 className="text-gray-900 text-xl font-bold mb-6">Credentials & Experience</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="material-symbols-outlined text-emerald-600">verified</span>
                          <span>NASM Certified Personal Trainer</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="material-symbols-outlined text-emerald-600">verified</span>
                          <span>Precision Nutrition Level 1 Coach</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="material-symbols-outlined text-emerald-600">verified</span>
                          <span>10+ Years Coaching Experience</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="material-symbols-outlined text-emerald-600">verified</span>
                          <span>500+ Clients Transformed</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="material-symbols-outlined text-emerald-600">verified</span>
                          <span>Former Collegiate Athlete</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-700">
                          <span className="material-symbols-outlined text-emerald-600">verified</span>
                          <span>Specialist in Injury Prevention</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-20">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Transform Your Life?</h2>
                <p className="mt-4 text-lg leading-8 text-gray-700">Book a free consultation with Matthew to discuss your fitness goals and create a personalized plan.</p>
                <div className="mt-10">
                  <Link 
                    to="/Contact" 
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-emerald-600 text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-emerald-700 transition-all"
                  >
                    <span className="truncate">Book Your Free Consultation</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* Contact Details Section */}
            <section className="bg-emerald-100 border-t border-emerald-200 mt-16">
              <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                  <div className="md:col-span-1">
                    <h3 className="text-lg font-bold text-gray-900">Contact Matthew</h3>
                    <div className="mt-4 space-y-2 text-gray-700">
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-emerald-600">email</span>
                        <span>fitsmartmatthew@mail.com</span>
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-emerald-600">phone</span>
                        <span>(316) 910 8707</span>
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-emerald-600">location_on</span>
                        <span>4535 Deslin Dr<br />Tallahassee<br />FL 32305</span>
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-gray-900">Studio Hours</h3>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-700">
                      <p><strong>Monday - Thursday:</strong> 6:00 AM - 8:00 PM</p>
                      <p><strong>Friday:</strong> 6:00 AM - 6:00 PM</p>
                      <p><strong>Saturday:</strong> 8:00 AM - 2:00 PM</p>
                      <p><strong>Sunday:</strong> Closed (Online sessions available)</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-emerald-100 text-gray-700 border-t border-emerald-200">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
              <div className="mt-8 flex justify-center space-x-6 text-sm">
                <Link 
                  to="/AboutMe" 
                  onClick={() => handleNavClick('/AboutMe')}
                  className="hover:text-emerald-600 transition-colors"
                >
                  About
                </Link>
                <Link 
                  to="/Contact" 
                  onClick={() => handleNavClick('/Contact')}
                  className="hover:text-emerald-600 transition-colors"
                >
                  Contact
                </Link>
              </div>
              <p className="mt-8 text-center text-xs leading-5">© 2025 FitSmart Matthew. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default About;