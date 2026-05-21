import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Contact() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    'full-name': '',
    'email': '',
    'phone-number': '',
    'fitness-level': 'Beginner',
    'interest': [],
    'availability': 'Mornings',
    'goals': '',
    'injuries': '',
    'how-found': 'Google'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // Initialize EmailJS once
  React.useEffect(() => {
    emailjs.init("FvpMZznqtxDjK8WXR");
  }, []);

  // Navigation handlers
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

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const updatedInterests = checked
        ? [...formData.interest, value]
        : formData.interest.filter(item => item !== value);
      
      setFormData({
        ...formData,
        'interest': updatedInterests
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setMessageType('');

    // Validate required fields
    if (!formData['full-name'] || !formData.email) {
      setMessageType('error');
      setSubmitMessage('Please fill in all required fields (Name and Email).');
      setIsSubmitting(false);
      return;
    }

    try {
      console.log('Attempting to send email...');

      const templateParams = {
        to_email: 'kechichianhovig4@gmail.com',
        from_name: formData['full-name'],
        from_email: formData.email,
        phone: formData['phone-number'] || 'Not provided',
        fitness_level: formData['fitness-level'],
        interests: formData.interest.join(', ') || 'Not specified',
        availability: formData.availability,
        goals: formData.goals || 'Not specified',
        injuries: formData.injuries || 'None',
        how_found: formData['how-found'],
        date: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      console.log('Template params:', templateParams);

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_d8vjnve',
        'template_maj7w8p',
        templateParams
      );

      console.log('EmailJS Response:', response);

      if (response.status === 200) {
        setMessageType('success');
        setSubmitMessage('Thank you! Your message has been sent successfully to Matthew. He will get back to you within 24 hours!');
        
        // Reset form
        setFormData({
          'full-name': '',
          'email': '',
          'phone-number': '',
          'fitness-level': 'Beginner',
          'interest': [],
          'availability': 'Mornings',
          'goals': '',
          'injuries': '',
          'how-found': 'Google'
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitMessage('');
          setMessageType('');
        }, 5000);
      }
    } catch (error) {
      console.error('Detailed EmailJS Error:', error);
      console.error('Error text:', error.text);
      
      setMessageType('error');
      
      if (error.text && error.text.includes('recipients address')) {
        setSubmitMessage('Email configuration error. Setting up recipient email...');
        
        // Try alternative approach with different parameter name
        try {
          const altTemplateParams = {
            to: 'kechichianhovig4@gmail.com',
            reply_to: formData.email,
            from_name: formData['full-name'],
            from_email: formData.email,
            phone: formData['phone-number'] || 'Not provided',
            fitness_level: formData['fitness-level'],
            interests: formData.interest.join(', ') || 'Not specified',
            availability: formData.availability,
            goals: formData.goals || 'Not specified',
            injuries: formData.injuries || 'None',
            how_found: formData['how-found'],
            date: new Date().toLocaleString()
          };

          const altResponse = await emailjs.send(
            'service_d8vjnve',
            'template_maj7w8p',
            altTemplateParams
          );
          
          console.log('Alternative attempt success:', altResponse);
          setMessageType('success');
          setSubmitMessage('Thank you! Your message has been sent successfully!');
        } catch (altError) {
          console.error('Alternative attempt failed:', altError);
          setSubmitMessage('Please check your EmailJS service configuration. The recipient email should be set in the dashboard.');
        }
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact Matthew directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-emerald-50 font-display text-gray-900">
      {/* Add Fonts */}
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
            <section className="px-4 sm:px-6 lg:px-8 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h1 className="text-gray-900 text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">Contact Matthew</h1>
                  <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-lg font-normal leading-normal">
                    We're excited to hear from you. Fill out the form below, and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  {/* Left Column: What happens next */}
                  <div className="space-y-8">
                    <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em]">Your Journey Starts Here: A Clear, Step-by-Step Process</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-[40px_1fr] gap-x-4">
                        {/* Step 1 */}
                        <div className="flex flex-col items-center gap-1 pt-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-emerald-100 text-emerald-600">
                            <span className="material-symbols-outlined">calendar_month</span>
                          </div>
                          <div className="w-[2px] bg-emerald-200 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-6">
                          <p className="text-gray-900 text-base font-medium leading-normal">Online Introduction Meeting</p>
                          <p className="text-gray-600 text-base font-normal leading-normal">20-minute online consultation to understand goals and determine fit.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-emerald-100 text-emerald-600">
                            <span className="material-symbols-outlined">checklist</span>
                          </div>
                          <div className="w-[2px] bg-emerald-200 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-6">
                          <p className="text-gray-900 text-base font-medium leading-normal">Personalized Assessment</p>
                          <p className="text-gray-600 text-base font-normal leading-normal">Analysis of discussion to create a tailored training approach.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-emerald-100 text-emerald-600">
                            <span className="material-symbols-outlined">map</span>
                          </div>
                          <div className="w-[2px] bg-emerald-200 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-6">
                          <p className="text-gray-900 text-base font-medium leading-normal">Customized Plan & Next Steps</p>
                          <p className="text-gray-600 text-base font-normal leading-normal">Presentation of a clear, actionable plan including training frequency, routines, nutrition, and equipment.</p>
                        </div>

                        {/* Step 4 */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-emerald-100 text-emerald-600">
                            <span className="material-symbols-outlined">schedule</span>
                          </div>
                          <div className="w-[2px] bg-emerald-200 grow"></div>
                        </div>
                        <div className="flex flex-1 flex-col pb-6">
                          <p className="text-gray-900 text-base font-medium leading-normal">Scheduling Your Sessions</p>
                          <p className="text-gray-600 text-base font-normal leading-normal">Flexible scheduling for in-person, online, or hybrid sessions.</p>
                        </div>

                        {/* Step 5 */}
                        <div className="flex flex-col items-center gap-1">
                          <div className="flex items-center justify-center size-10 rounded-full bg-emerald-100 text-emerald-600">
                            <span className="material-symbols-outlined">flag</span>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                          <p className="text-gray-900 text-base font-medium leading-normal">Training Begins — Your Journey Starts</p>
                          <p className="text-gray-600 text-base font-normal leading-normal">Kick-off of the fitness journey with expert guidance and accountability.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Contact Form */}
                  <div className="bg-white p-8 rounded-xl shadow-lg border border-emerald-200">
                    <h2 className="text-gray-900 text-2xl sm:text-3xl font-bold leading-tight tracking-[-0.015em] mb-6">Ready to Take the First Step?</h2>
                    
                    {/* Success/Error Message */}
                    {submitMessage && (
                      <div className={`mb-6 p-4 rounded-lg ${messageType === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                        <div className="flex items-start">
                          <span className="material-symbols-outlined mr-3 mt-0.5">
                            {messageType === 'success' ? 'check_circle' : 'error'}
                          </span>
                          <span>{submitMessage}</span>
                        </div>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-medium text-gray-700" htmlFor="full-name">Full Name *</label>
                          <input 
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600" 
                            id="full-name" 
                            name="full-name" 
                            required 
                            type="text"
                            value={formData['full-name']}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address *</label>
                          <input 
                            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600" 
                            id="email" 
                            name="email" 
                            required 
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="phone-number">Phone Number (Optional)</label>
                        <input 
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600" 
                          id="phone-number" 
                          name="phone-number" 
                          type="tel"
                          value={formData['phone-number']}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="fitness-level">What best describes your current fitness level?</label>
                        <select 
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600" 
                          id="fitness-level" 
                          name="fitness-level"
                          value={formData['fitness-level']}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        >
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Returning after a break</option>
                        </select>
                      </div>

                      <fieldset>
                        <legend className="text-sm font-medium text-gray-700">What are you most interested in?</legend>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {['1-on-1 Personal Training', 'Small Group Training', 'HIIT Classes', 'Strength Training', 'Online Coaching', 'Not sure yet'].map((interest, index) => {
                            const value = interest.replace(/\s+/g, '-').toLowerCase();
                            return (
                              <div className="flex items-center" key={index}>
                                <input 
                                  className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600" 
                                  id={`interest-${value}`} 
                                  name="interest[]" 
                                  type="checkbox" 
                                  value={interest}
                                  checked={formData.interest.includes(interest)}
                                  onChange={handleInputChange}
                                  disabled={isSubmitting}
                                />
                                <label className="ml-3 text-sm text-gray-600" htmlFor={`interest-${value}`}>{interest}</label>
                              </div>
                            );
                          })}
                        </div>
                      </fieldset>

                      <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="availability">Preferred training time</label>
                        <select 
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600" 
                          id="availability" 
                          name="availability"
                          value={formData.availability}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        >
                          <option>Mornings</option>
                          <option>Afternoons</option>
                          <option>Evenings</option>
                          <option>Weekends</option>
                          <option>Flexible</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="goals">Tell me about your main fitness goal(s):</label>
                        <textarea 
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600" 
                          id="goals" 
                          name="goals" 
                          rows="3"
                          value={formData.goals}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          placeholder="e.g., Weight loss, muscle gain, improved endurance, etc."
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="injuries">Any injuries or health considerations I should know about? (Optional)</label>
                        <textarea 
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600" 
                          id="injuries" 
                          name="injuries" 
                          rows="2"
                          value={formData.injuries}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          placeholder="e.g., Knee injury, back pain, asthma, etc."
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="how-found">How did you hear about FitSmart Matthew?</label>
                        <select 
                          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600" 
                          id="how-found" 
                          name="how-found"
                          value={formData['how-found']}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                        >
                          <option>Google</option>
                          <option>Social Media</option>
                          <option>Referral</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <button 
                          className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" 
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                        <p className="mt-2 text-xs text-gray-500 text-center">
                          Your message will be sent directly to Matthew at fitsmartmatthew@mail.com
                        </p>
                      </div>
                    </form>
                  </div>
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
                        <span>(316) 910-8707</span>
                      </p>
                      <p className="flex items-center justify-center md:justify-start">
                        <span className="material-symbols-outlined mr-2 text-emerald-600">location_on</span>
                        <span>4535 Deslin Dr, Tallahassee, FL 32305</span>
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
                    <div className="mt-6">
                      <p className="text-sm text-gray-600">
                        <strong>Note:</strong> All form submissions are sent directly to Matthew's inbox. You should receive a response within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* Footer */}
          <footer className="bg-emerald-100 text-gray-700 border-t border-emerald-200">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
              <div className="flex justify-center space-x-6">
                {/* Social media icons can go here */}
              </div>
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

export default Contact;