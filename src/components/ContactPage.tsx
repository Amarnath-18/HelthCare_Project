import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, AlertCircle } from 'lucide-react';

// Import service areas
const serviceAreas = [
  'Laketown',
  'Kestopur', 
  'Baguiati',
  'Joramondir',
  'Jyngra',
  'Loknath Mandir',
  'Teghoria',
  'Chinar Park',
  'Nopara',
  'City Centre 2',
  'Rajarhat'
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    serviceArea: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [phoneError, setPhoneError] = useState('');

  // Validate Indian phone number format
  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Validate phone in real-time
    if (name === 'phone') {
      if (value && value.length >= 10) {
        if (!validatePhoneNumber(value)) {
          setPhoneError('Please enter a valid Indian phone number');
        } else {
          setPhoneError('');
        }
      } else {
        setPhoneError('');
      }
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number before submission
    if (!validatePhoneNumber(formData.phone)) {
      setPhoneError('Please enter a valid Indian phone number (10 digits)');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Combine first and last name for the email
      const emailData = {
        ...formData,
        name: `${formData.firstName} ${formData.lastName}`.trim()
      };

      const response = await fetch('https://formspree.io/f/meokkgzb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          service: '',
          serviceArea: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
            Get in touch with our healthcare professionals. We're here to provide 
            you with the best medical care at your doorstep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors duration-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9+\s-]{10,15}"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={() => {
                      if (formData.phone && !validatePhoneNumber(formData.phone)) {
                        setPhoneError('Please enter a valid Indian phone number');
                      }
                    }}
                    className={`w-full px-4 py-3 border ${phoneError ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300 dark:border-gray-600'} dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    placeholder="9876543210"
                  />
                  {phoneError && (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                    </div>
                  )}
                </div>
                {phoneError && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{phoneError}</p>}
                {!phoneError && <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Enter a 10-digit number (e.g., 9876543210)</p>}
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  
                  {/* Laboratory Services */}
                  <optgroup label="Laboratory Services">
                    <option value="sample-collection">Sample Collection - No Charge</option>
                    <option value="blood-test">Blood Test - As Per Blood Test</option>
                    <option value="urine-test">Urine Test - As Per Urine Test</option>
                    <option value="stool-test">Stool Test - As Per Stool Test</option>
                    <option value="biopsy">Biopsy - As Per Test</option>
                    <option value="lab-others">Other Lab Tests - Contact for pricing</option>
                  </optgroup>

                  {/* Home Care Services */}
                  <optgroup label="Home Care Services">
                    <option value="blood-pressure">Blood Pressure Measurement - ₹50</option>
                    <option value="cbg-analysis">CBG Analysis - ₹100</option>
                    <option value="dressing">Wound Dressing - ₹400 onwards</option>
                    <option value="vital-checkup">Vital Signs Checkup - ₹100</option>
                    <option value="critical-monitoring">Critical ill Patient Monitoring - ₹2000 - ₹5000/day</option>
                    <option value="supportive-care">Supportive Care - ₹1000 - ₹1500/day</option>
                  </optgroup>

                  {/* Medical Procedures */}
                  <optgroup label="Medical Procedures">
                    <option value="iv-cannulation">IV Cannulation - ₹200</option>
                    <option value="injections">IV/IM Injections - ₹100 - ₹400</option>
                    <option value="ng-tube">NG Tube Insertion - ₹500 - ₹800</option>
                    <option value="catheterization">Urinary Catheterization - ₹500 - ₹800</option>
                    <option value="procedure-others">Other Procedures - Contact for pricing</option>
                  </optgroup>

                  {/* Emergency & Others */}
                  <optgroup label="Emergency & Others">
                    <option value="emergency-medical">Emergency Medical Care - ₹1000 - ₹3000</option>
                    <option value="oxygen-therapy">Oxygen Therapy - ₹500 - ₹1200/day</option>
                    <option value="fluid-therapy">Fluid Therapy - ₹400 - ₹800</option>
                    <option value="emergency-others">Other Emergency Services - Contact for pricing</option>
                  </optgroup>

                  <option value="other">Other Service (Please specify in message)</option>
                </select>
              </div>
              <div>
                <label htmlFor="serviceArea" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Area *
                </label>
                <select
                  id="serviceArea"
                  name="serviceArea"
                  value={formData.serviceArea}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your area</option>
                  {serviceAreas.map((area, index) => (
                    <option key={index} value={area}>
                      {area}
                    </option>
                  ))}
                  <option value="other">Other Area (Please specify in message)</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Please provide details about your healthcare needs or specify an area not listed above..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white py-4 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
              
              <p className="text-sm text-gray-600 text-center mt-2">* All fields are required</p>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 flex items-center">
                  <AlertCircle className="h-5 w-5 mr-2 text-red-600" />
                  <span>
                    Sorry, there was an error sending your message. Please try again or call us directly.
                  </span>
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors duration-200">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">Primary: 9593388865</p>
                    <p className="text-gray-600 dark:text-gray-300">Secondary: 6295328031</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <a 
                      href="mailto:seecurehomehealthcare@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      seecurehomehealthcare@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">Quick response via WhatsApp</p>
                    <a
                      href="https://wa.me/9593388865"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Service Areas</h3>
                    <p className="text-gray-600 dark:text-gray-300">Laketown, Kestopur, Baguiati</p>
                    <p className="text-gray-600 dark:text-gray-300">Rajarhat, Chinar Park & nearby areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-colors duration-200">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Operating Hours</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-semibold dark:text-white">Emergency Services</span>
                      <span className="text-green-600 dark:text-green-400 font-semibold">24/7</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-semibold dark:text-white">Regular Services</span>
                      <span className="text-gray-600 dark:text-gray-300">8:00 AM - 8:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-semibold dark:text-white">Customer Support</span>
                      <span className="text-gray-600 dark:text-gray-300">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Emergency Situations</h3>
              <p className="mb-4 opacity-90">
                For immediate medical emergencies, call our 24/7 emergency hotline:
              </p>
              <div className="text-2xl font-bold">
                📞 9593388865
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
