import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-emerald-50 font-display text-gray-900">
      {/* Add Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* Header */}
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
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <span className="text-emerald-600 text-sm font-bold leading-normal">Home</span>
                  <Link 
                    to="/Services" 
                    onClick={() => handleNavClick('/Services')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-emerald-600 transition-colors"
                  >
                    Services
                  </Link>
                  <Link 
                    to="/AboutMe" 
                    onClick={() => handleNavClick('/AboutMe')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-emerald-600 transition-colors"
                  >
                    About
                  </Link>
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
                    <div className="px-2 py-3">
                      <span className="text-emerald-600 text-sm font-bold leading-normal block">Home</span>
                    </div>
                    <Link 
                      to="/Services" 
                      onClick={() => handleNavClick('/Services')}
                      className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-emerald-600 transition-colors border-t border-emerald-100"
                    >
                      Services
                    </Link>
                    <Link 
                      to="/AboutMe" 
                      onClick={() => handleNavClick('/AboutMe')}
                      className="block px-2 py-3 text-gray-900 text-sm font-medium leading-normal hover:text-emerald-600 transition-colors border-t border-emerald-100"
                    >
                      About
                    </Link>
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
            {/* Hero Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-5">
              <div className="min-h-[60vh] flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-start justify-end px-4 pb-10 sm:px-10" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCv9X9yAgmsPZfj31jP_-9AZK0BIV-ju8rFlBH4P4Sqw7f_SG2_gEyTEr0roGR68-pXeS2IPuzF8dnrKbNs60JQZNLrGGQk4DLgn95QZQvZXvJCDqemwEiZHOeNO46nDJzyET9tTceZ_cicFslyih8LlDsVFfdb9kV9TQGsY9ZVRV-mlzyehEEJCKmbzzRMNHOKgbYR9RIIAVp4u-q7EHqj82bpLHcdmd1UVzJ1CJG48zbpJqiRxsiIKd-v9bBEHE2cGPNjCRQtd3w")' }}>
                <div className="flex flex-col gap-2 text-left max-w-3xl">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">Transform Your Body, Elevate Your Life with FitSmart Matthew</h1>
                  <h2 className="text-white text-sm font-normal leading-normal sm:text-base">Achieve your fitness goals with a personalized approach from an expert who cares.</h2>
                </div>
                <div className="flex-wrap gap-3 flex flex-col sm:flex-row">
                  <Link 
                    to="/Contact" 
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 sm:h-12 sm:px-5 bg-emerald-600 text-white text-sm font-bold leading-normal tracking-[0.015em] sm:text-base hover:bg-emerald-700 transition-all"
                  >
                    <span className="truncate">Book Your Free Consultation</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-10">
              <h2 className="text-gray-900 text-center text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">Your Path to Fitness Excellence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* 1-on-1 Personal Training */}
                <div className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-emerald-200 bg-white p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-gray-900 text-lg font-bold leading-tight">1-on-1 Personal Training</h3>
                    <p className="flex items-baseline gap-1 text-gray-900">
                      <span className="text-4xl font-black leading-tight tracking-[-0.033em]">$75</span>
                      <span className="text-base font-bold leading-tight">/session</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-emerald-600 text-lg">check_circle</span> Personalized workout plans
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-emerald-600 text-lg">check_circle</span> Nutritional guidance
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-emerald-600 text-lg">check_circle</span> Weekly check-ins
                    </div>
                  </div>
                </div>

                {/* Group Fitness Classes */}
                <div className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-emerald-600 bg-white p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-gray-900 text-lg font-bold leading-tight">Group Fitness Classes</h3>
                    <p className="flex items-baseline gap-1 text-gray-900">
                      <span className="text-4xl font-black leading-tight tracking-[-0.033em]">$100</span>
                      <span className="text-base font-bold leading-tight">/class</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-emerald-600 text-lg">check_circle</span> High-energy group workouts
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-emerald-600 text-lg">check_circle</span> Community support
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-emerald-600 text-lg">check_circle</span> Flexible schedule
                    </div>
                  </div>
                </div>

                {/* Online Coaching */}
                <div className="flex flex-1 flex-col gap-4 rounded-lg border border-solid border-emerald-200 bg-white p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-gray-900 text-lg font-bold leading-tight">Online Coaching</h3>
                    <p className="flex items-baseline gap-1 text-gray-900">
                      <span className="text-4xl font-black leading-tight tracking-[-0.033em]">$250</span>
                      <span className="text-base font-bold leading-tight">/month</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-emerald-600 text-lg">check_circle</span> Workout from anywhere
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-emerald-600 text-lg">check_circle</span> Custom app access
                    </div>
                    <div className="text-[13px] font-normal leading-normal flex gap-3 items-center text-gray-700">
                      <span className="material-symbols-outlined text-emerald-600 text-lg">check_circle</span> 24/7 support
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Client Success Stories Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-10">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-gray-900 text-center text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-8 pt-5">Real Results, Real Transformations</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Testimonial 1 */}
                  <div className="flex flex-col gap-6 rounded-lg border border-solid border-emerald-200 bg-white p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="size-14 rounded-full bg-emerald-100 flex items-center justify-center overflow-hidden">
                        <span className="material-symbols-outlined text-2xl text-emerald-600">person</span>
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-bold text-lg">Michael R.</h3>
                        <p className="text-gray-600 text-sm">Lost 45 lbs in 6 months</p>
                      </div>
                    </div>
                    <div className="text-gray-700 text-base leading-relaxed">
                      "FitSmart Matthew changed my life. After years of failed diets, Matthew's approach helped me build sustainable habits. I've not only lost weight but gained confidence and energy I didn't know I had!"
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="flex flex-col gap-6 rounded-lg border border-solid border-emerald-600 bg-white p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">FEATURED</div>
                    <div className="flex items-center gap-4">
                      <div className="size-14 rounded-full bg-emerald-100 flex items-center justify-center overflow-hidden">
                        <span className="material-symbols-outlined text-2xl text-emerald-600">person</span>
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-bold text-lg">Sarah L.</h3>
                        <p className="text-gray-600 text-sm">Strength +35% in 4 months</p>
                      </div>
                    </div>
                    <div className="text-gray-700 text-base leading-relaxed">
                      "As a busy professional, I needed efficient workouts. The personalized programming and online coaching fit perfectly into my schedule. I'm stronger now than I was in college!"
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="flex flex-col gap-6 rounded-lg border border-solid border-emerald-200 bg-white p-8 hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4">
                      <div className="size-14 rounded-full bg-emerald-100 flex items-center justify-center overflow-hidden">
                        <span className="material-symbols-outlined text-2xl text-emerald-600">person</span>
                      </div>
                      <div>
                        <h3 className="text-gray-900 font-bold text-lg">David & Maria</h3>
                        <p className="text-gray-600 text-sm">Couple's fitness journey</p>
                      </div>
                    </div>
                    <div className="text-gray-700 text-base leading-relaxed">
                      "Training together has brought us closer. The group classes created a fun, supportive environment that kept us both motivated. We're healthier and happier than ever!"
                    </div>
                    <div className="flex items-center gap-1 text-amber-500">
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star</span>
                      <span className="material-symbols-outlined text-lg">star_half</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-12 pt-8 border-t border-emerald-200">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-black text-emerald-600">95%</div>
                      <div className="text-gray-700 text-sm mt-2">Client Retention Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-emerald-600">500+</div>
                      <div className="text-gray-700 text-sm mt-2">Clients Transformed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-emerald-600">4.9</div>
                      <div className="text-gray-700 text-sm mt-2">Average Rating</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-emerald-600">10+</div>
                      <div className="text-gray-700 text-sm mt-2">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Framework Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-20 bg-emerald-100">
              <div className="max-w-7xl mx-auto flex flex-col gap-12">
                <h2 className="text-gray-900 text-center text-3xl font-bold leading-tight tracking-[-0.015em] px-4">The Science-Backed FitSmart Matthew Framework</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-emerald-300"></div>
                    <div className="space-y-12">
                      {/* Assessment & Foundation */}
                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-emerald-600 text-white ring-8 ring-emerald-100">
                          <span className="material-symbols-outlined text-base">checklist</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-emerald-600">Assessment & Foundation</h3>
                          <p className="font-semibold text-gray-900">We Start With Understanding</p>
                          <p className="text-sm text-gray-700 mt-1">Comprehensive movement screen, goal alignment, and lifestyle assessment.</p>
                        </div>
                      </div>

                      {/* Personal Blueprint */}
                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-emerald-600 text-white ring-8 ring-emerald-100">
                          <span className="material-symbols-outlined text-base">map</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-emerald-600">Personal Blueprint</h3>
                          <p className="font-semibold text-gray-900">Your Custom Roadmap</p>
                          <p className="text-sm text-gray-700 mt-1">Tailored programming based on unique starting point and objectives.</p>
                        </div>
                      </div>

                      {/* Guided Implementation */}
                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-emerald-600 text-white ring-8 ring-emerald-100">
                          <span className="material-symbols-outlined text-base">groups</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-emerald-600">Guided Implementation</h3>
                          <p className="font-semibold text-gray-900">Expert-Led Execution</p>
                          <p className="text-sm text-gray-700 mt-1">Coached sessions focusing on perfect form and sustainable progress.</p>
                        </div>
                      </div>

                      {/* Progress Tracking */}
                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-emerald-600 text-white ring-8 ring-emerald-100">
                          <span className="material-symbols-outlined text-base">monitoring</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-emerald-600">Progress Tracking</h3>
                          <p className="font-semibold text-gray-900">Measurable Milestones</p>
                          <p className="text-sm text-gray-700 mt-1">Regular check-ins, adjustments, and celebration of wins.</p>
                        </div>
                      </div>

                      {/* Lifelong Habits */}
                      <div className="relative flex items-start gap-6">
                        <div className="absolute -left-11 top-1 flex size-7 items-center justify-center rounded-full bg-emerald-600 text-white ring-8 ring-emerald-100">
                          <span className="material-symbols-outlined text-base">autorenew</span>
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-emerald-600">Lifelong Habits</h3>
                          <p className="font-semibold text-gray-900">Sustainable Transformation</p>
                          <p className="text-sm text-gray-700 mt-1">Building fitness for the long term.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Why Our Framework Works */}
                  <div className="flex flex-col gap-8">
                    <h3 className="text-2xl font-bold text-gray-900 tracking-tight">Why Our Framework Delivers Results When Other Approaches Fail</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0 size-10 flex items-center justify-center rounded-lg bg-emerald-200 text-emerald-600">
                          <span className="material-symbols-outlined">science</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-900">Science-Based Programming</h4>
                          <p className="text-sm text-gray-700 mt-1">Evidence over trends—every workout follows exercise physiology principles proven to deliver results safely and efficiently.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0 size-10 flex items-center justify-center rounded-lg bg-emerald-200 text-emerald-600">
                          <span className="material-symbols-outlined">bolt</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-900">Habit-First Coaching</h4>
                          <p className="text-sm text-gray-700 mt-1">We focus on building sustainable routines, not temporary motivation. Small consistent actions create lifelong change.</p>
                        </div>
                      </div>
                      <div className="flex gap-4 items-start">
                        <div className="flex-shrink-0 size-10 flex items-center justify-center rounded-lg bg-emerald-200 text-emerald-600">
                          <span className="material-symbols-outlined">handshake</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-gray-900">Community Accountability</h4>
                          <p className="text-sm text-gray-700 mt-1">You're never training alone. Our supportive community and regular check-ins keep you on track through challenges.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-emerald-300 pt-12 flex flex-col items-center gap-8">
                  <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-semibold text-gray-700">
                    <span>8+ Years of Refined Methodology</span>
                    <span className="text-emerald-400 hidden sm:inline">|</span>
                    <span>95% Client Retention Rate</span>
                    <span className="text-emerald-400 hidden sm:inline">|</span>
                    <span>NASM & Precision Nutrition Certified</span>
                  </div>
                  <Link 
                    to="/Contact" 
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-emerald-600 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-emerald-700 transition-all"
                  >
                    <span className="truncate">Experience Our Method with a Free Strategy Session</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="px-4 sm:px-10 lg:px-20 py-20">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ready to Start Your Journey?</h2>
                <p className="mt-4 text-lg leading-8 text-gray-700">Book a free, no-obligation consultation to discuss your goals and find the perfect plan for you.</p>
                <div className="mt-10">
                  <Link 
                    to="/Contact" 
                    onClick={() => handleNavClick('/Contact')}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-emerald-600 text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-emerald-700 transition-all"
                  >
                    <span className="truncate">Claim Your Free Consultation</span>
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
                    <div className="mt-4 space-y-2 text-gray-600">
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-emerald-600">email</span>
                        <span>fitsmartmatthew@mail.com</span>
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-emerald-600">phone</span>
                        <span>(316) 910 8709</span>
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-emerald-600">location_on</span>
                        <span>7203 Marbach RD<br />San Antonio<br />TX 78227</span>
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-bold text-gray-900">Studio Hours</h3>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-600">
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
          <footer className="bg-emerald-100 text-gray-700">
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
              <p className="mt-8 text-center text-xs leading-5">© 2026 FitSmart Matthew. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>
    </div>
  );
}

export default HomePage;