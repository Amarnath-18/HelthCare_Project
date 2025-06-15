import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Phone, Mail, Clock, MapPin, AlertCircle } from 'lucide-react';

// Import service areas from ServiceAreas component
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
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
    // Basic Indian phone number validation (10 digits, optionally starting with +91 or 0)
    const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Validate phone in real-time as user types
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
      const response = await fetch('https://formspree.io/f/meokkgzb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', serviceArea: '', message: '' });
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
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to receive professional healthcare services at home? Get in touch with us today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone Numbers</h4>
                    <p className="text-gray-600">9593388865 / 6295328031</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email Address</h4>
                    <p className="text-gray-600">seecurehomehealthcare@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp</h4>
                    <p className="text-gray-600 mb-2">Quick response via WhatsApp</p>
                    <a
                      href="https://wa.me/9593388865"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Availability</h4>
                    <p className="text-gray-600">24/7 Emergency Services</p>
                    <p className="text-gray-600">Regular Hours: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Service Areas</h4>
                    <p className="text-gray-600">
                      {serviceAreas.slice(0, 5).join(', ')} and surrounding areas
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="h-4 w-4 text-red-600" />
                </div>
                <h4 className="font-semibold text-red-800">Emergency Services</h4>
              </div>
              <p className="text-red-700">
                For urgent medical needs, call us immediately at 9593388865. We provide 24/7 emergency home healthcare services.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className={`w-full px-4 py-3 border ${phoneError ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors`}
                      placeholder="Your phone number (e.g., 9876543210)"
                    />
                    {phoneError && (
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      </div>
                    )}
                  </div>
                  {phoneError && <p className="mt-2 text-sm text-red-600">{phoneError}</p>}
                  {!phoneError && <p className="mt-1 text-xs text-gray-500">Enter a 10-digit number (e.g., 9876543210)</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="blood-pressure">Blood Pressure Measurement - ₹50</option>
                  <option value="injections">IV, IM Injections - ₹100</option>
                  <option value="cbg-analysis">CBG Analysis - ₹100</option>
                  <option value="catheterization">Urinary Catheterization - ₹1000</option>
                  <option value="iv-cannulation">IV Cannulation - ₹200</option>
                  <option value="blood-collection">Blood Sample Collection - No extra charge</option>
                  <option value="dressing">Wound Dressing - ₹500 onwards</option>
                  <option value="ng-tube-insertion">Nasogastric (NG) tube insertion - ₹1000</option>
                  <option value="other">Other Service</option>
                </select>
              </div>

              <div>
                <label htmlFor="serviceArea" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Area *
                </label>
                <select
                  id="serviceArea"
                  name="serviceArea"
                  value={formData.serviceArea}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Please provide details about your healthcare needs or specify an area not listed above..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;