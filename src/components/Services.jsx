import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

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

  // Service data with 5 categories, 6 services each
  const servicesData = {
    strength: {
      name: "💪 Strength Training",
      icon: "fitness_center",
      services: [
        { id: 1, name: "Powerlifting Foundations", price: "$85/session", description: "Master the big three lifts: squat, bench, and deadlift with proper form and progressive overload.", duration: "60 min" },
        { id: 2, name: "Olympic Weightlifting", price: "$95/session", description: "Learn snatch and clean & jerk techniques with expert coaching and form correction.", duration: "75 min" },
        { id: 3, name: "Functional Strength", price: "$75/session", description: "Build real-world strength through compound movements and functional training patterns.", duration: "60 min" },
        { id: 4, name: "Bodybuilding & Hypertrophy", price: "$80/session", description: "Targeted muscle growth with split routines and advanced bodybuilding techniques.", duration: "60 min" },
        { id: 5, name: "Kettlebell Mastery", price: "$70/session", description: "Dynamic kettlebell training for strength, endurance, and explosive power.", duration: "55 min" },
        { id: 6, name: "Strongman Training", price: "$90/session", description: "Unique strongman implements: tires, sleds, farmers walks, and yoke carries.", duration: "75 min" }
      ]
    },
    cardio: {
      name: "🔥 Cardio & HIIT",
      icon: "bolt",
      services: [
        { id: 7, name: "HIIT Blast", price: "$65/session", description: "High-intensity intervals to maximize calorie burn and boost metabolism in minimal time.", duration: "45 min" },
        { id: 8, name: "Endurance Builder", price: "$70/session", description: "Build cardiovascular endurance with steady-state and zone training sessions.", duration: "60 min" },
        { id: 9, name: "Boxing Fitness", price: "$75/session", description: "Punch, move, and sweat with boxing-inspired cardio workouts.", duration: "50 min" },
        { id: 10, name: "Spin & Cycle", price: "$65/session", description: "High-energy indoor cycling with hill climbs, sprints, and endurance rides.", duration: "45 min" },
        { id: 11, name: "Boot Camp", price: "$70/session", description: "Military-style circuit training combining cardio and bodyweight exercises.", duration: "60 min" },
        { id: 12, name: "StairMaster Challenge", price: "$60/session", description: "Incline training focused on glutes, quads, and cardiovascular health.", duration: "40 min" }
      ]
    },
    wellness: {
      name: "🧘 Wellness & Recovery",
      icon: "self_improvement",
      services: [
        { id: 13, name: "Mobility & Flexibility", price: "$75/session", description: "Improve range of motion and reduce injury risk with targeted stretching.", duration: "55 min" },
        { id: 14, name: "Yoga Flow", price: "$70/session", description: "Vinyasa yoga for strength, balance, and mindfulness.", duration: "60 min" },
        { id: 15, name: "Foam Rolling & Release", price: "$65/session", description: "Self-myofascial release techniques to reduce muscle tension and soreness.", duration: "45 min" },
        { id: 16, name: "Injury Prevention", price: "$80/session", description: "Corrective exercise strategies for injury-prone areas and movement patterns.", duration: "60 min" },
        { id: 17, name: "Breathwork & Meditation", price: "$60/session", description: "Stress reduction and mental clarity through guided breathing techniques.", duration: "45 min" },
        { id: 18, name: "Posture Correction", price: "$75/session", description: "Address forward head, rounded shoulders, and desk posture issues.", duration: "55 min" }
      ]
    },
    specialized: {
      name: "🎯 Specialized Programs",
      icon: "star",
      services: [
        { id: 19, name: "Pre/Post Natal Fitness", price: "$85/session", description: "Safe training for expecting and new mothers with core and pelvic floor focus.", duration: "60 min" },
        { id: 20, name: "Senior Fitness", price: "$70/session", description: "Low-impact training for balance, bone density, and functional independence.", duration: "50 min" },
        { id: 21, name: "Youth Athletic Development", price: "$75/session", description: "Sport-specific training for young athletes aged 12-18.", duration: "60 min" },
        { id: 22, name: "Weight Loss Transformation", price: "$80/session", description: "Comprehensive program combining training, nutrition, and habit coaching.", duration: "60 min" },
        { id: 23, name: "Rehab & Recovery", price: "$90/session", description: "Post-injury training to regain strength and movement safely.", duration: "60 min" },
        { id: 24, name: "Corporate Wellness", price: "$500/package", description: "On-site classes and wellness seminars for workplace teams.", duration: "45-60 min" }
      ]
    },
    virtual: {
      name: "💻 Virtual Coaching",
      icon: "laptop_mac",
      services: [
        { id: 25, name: "1-on-1 Online Training", price: "$70/session", description: "Live video sessions with real-time form correction and coaching.", duration: "55 min" },
        { id: 26, name: "Custom App Programming", price: "$200/month", description: "Personalized workouts delivered to your phone with video demos.", duration: "Ongoing" },
        { id: 27, name: "Nutrition Coaching", price: "$150/month", description: "Virtual nutrition guidance, meal planning, and habit tracking.", duration: "Monthly" },
        { id: 28, name: "Group Virtual Classes", price: "$40/class", description: "Live group fitness classes via Zoom with community chat support.", duration: "45 min" },
        { id: 29, name: "24/7 Messaging Support", price: "$100/month", description: "Unlimited text/voice support, form checks, and accountability.", duration: "Ongoing" },
        { id: 30, name: "Hybrid Training Plan", price: "$250/month", description: "Mix of in-person and virtual sessions with full app access.", duration: "Monthly" }
      ]
    }
  };

  // Get all services for "all" category
  const getAllServices = () => {
    const all = [];
    Object.values(servicesData).forEach(category => {
      all.push(...category.services);
    });
    return all;
  };

  const getFilteredServices = () => {
    if (activeCategory === 'all') return getAllServices();
    return servicesData[activeCategory]?.services || [];
  };

  const filteredServices = getFilteredServices();

  return (
    <div className="bg-emerald-50 font-display text-gray-900">
      <link href="https://fonts.googleapis.com/css2?family=Spline+Sans:wght@400;500;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
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
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex flex-1 justify-end gap-8">
                <div className="flex items-center gap-9">
                  <Link 
                    to="/HomePage" 
                    onClick={() => handleNavClick('/HomePage')}
                    className="text-gray-900 text-sm font-medium leading-normal hover:text-emerald-600 transition-colors"
                  >
                    Home
                  </Link>
                  <span className="text-emerald-600 text-sm font-bold leading-normal">Services</span>
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
                <button onClick={toggleMobileMenu} className="text-gray-900 p-2">
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
                    <div className="px-2 py-3 border-t border-emerald-100">
                      <span className="text-emerald-600 text-sm font-bold leading-normal">Services</span>
                    </div>
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
            <div className="px-4 sm:px-10 lg:px-20 py-12 bg-emerald-100">
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Our Services</h1>
              <p className="text-gray-700 text-lg max-w-2xl">
                Discover personalized fitness solutions designed to fit your goals, lifestyle, and budget.
              </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="px-4 sm:px-10 lg:px-20 py-8 border-b border-emerald-200">
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === 'all'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  All Services ({getAllServices().length})
                </button>
                <button
                  onClick={() => setActiveCategory('strength')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === 'strength'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  {servicesData.strength.name}
                </button>
                <button
                  onClick={() => setActiveCategory('cardio')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === 'cardio'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  {servicesData.cardio.name}
                </button>
                <button
                  onClick={() => setActiveCategory('wellness')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === 'wellness'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  {servicesData.wellness.name}
                </button>
                <button
                  onClick={() => setActiveCategory('specialized')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === 'specialized'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  {servicesData.specialized.name}
                </button>
                <button
                  onClick={() => setActiveCategory('virtual')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === 'virtual'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-white text-gray-700 border border-emerald-200 hover:bg-emerald-50'
                  }`}
                >
                  {servicesData.virtual.name}
                </button>
              </div>
            </div>

            {/* Active Category Title */}
            <div className="px-4 sm:px-10 lg:px-20 pt-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeCategory === 'all' 
                  ? 'All Services' 
                  : servicesData[activeCategory]?.name}
              </h2>
              <p className="text-gray-600 mt-1">
                {filteredServices.length} services available
              </p>
            </div>

            {/* Services Grid */}
            <div className="px-4 sm:px-10 lg:px-20 py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service, index) => (
                  <div key={service.id} className="bg-white rounded-xl border border-emerald-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-emerald-600 text-xl">
                            {activeCategory !== 'all' 
                              ? servicesData[activeCategory]?.icon 
                              : index < 6 ? 'fitness_center' : index < 12 ? 'bolt' : index < 18 ? 'self_improvement' : index < 24 ? 'star' : 'laptop_mac'}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-black text-emerald-600">{service.price.split('/')[0]}</span>
                        <span className="text-xs text-gray-500">/{service.price.split('/')[1]}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-emerald-100">
                      <div className="flex items-center gap-1 text-gray-500 text-xs">
                        <span className="material-symbols-outlined text-emerald-500 text-base">schedule</span>
                        <span>{service.duration}</span>
                      </div>
                      <Link 
                        to="/Contact" 
                        onClick={() => handleNavClick('/Contact')}
                        className="text-emerald-600 text-sm font-semibold hover:text-emerald-700 transition-colors flex items-center gap-1"
                      >
                        Book Now
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="px-4 sm:px-10 lg:px-20 py-16 border-t border-solid border-emerald-200 text-center bg-emerald-100 mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                Book a free, no-obligation consultation to discuss your goals with Matthew.
              </p>
              <Link 
                to="/Contact" 
                onClick={() => handleNavClick('/Contact')}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-emerald-600 text-white text-base font-bold leading-normal tracking-[0.015em] mx-auto hover:bg-emerald-700 transition-all"
              >
                <span className="truncate">Book Your Consultation Here</span>
              </Link>
            </div>

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
                        <span>7203 Marbach RD<br />San Antonio<br />TX 78227</span>
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
                <p className="mt-8 text-center text-xs leading-5">© 2026 FitSmart Matthew. All rights reserved.</p>
              </div>
            </footer>
          </main>
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

export default Services;