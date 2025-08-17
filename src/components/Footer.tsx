import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3">
              {/* <img 
                src="../../public/updated_logo.jpg" 
                alt="Seecure Home Health Care Logo" 
                className="h-12 w-12 rounded-full object-cover"
              /> */}
              <span className="font-bold text-xl">Seecure Home Health Care</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Providing professional, compassionate healthcare services in the comfort of your home. Your health and well-being are our top priorities.
            </p>
            <div className="flex items-center space-x-2 text-red-400">
              <Heart className="h-5 w-5" />
              <span className="text-sm font-medium">Caring for you, always</span>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-medium">Primary: 9593388865</p>
                  <p className="text-gray-400">Secondary: 6295328031</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-400">seecurehomehealthcare@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Services Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li 
                className="hover:text-blue-400 cursor-pointer transition-colors duration-200"
                onClick={() => handleServiceClick('lab-service')}
              >
                Laboratary Service
              </li>
              <li 
                className="hover:text-blue-400 cursor-pointer transition-colors duration-200"
                onClick={() => handleServiceClick('home-care')}
              >
                Home Care Services
              </li>
              <li 
                className="hover:text-blue-400 cursor-pointer transition-colors duration-200"
                onClick={() => handleServiceClick('procedures')}
              >
                Procedure Services
              </li>
              <li 
                className="hover:text-blue-400 cursor-pointer transition-colors duration-200"
                onClick={() => handleServiceClick('emergency')}
              >
                Others
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-700 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Seecure Home Health Care. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Professional healthcare services delivered with care and compassion.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-blue-400 font-medium text-sm">Available 24/7</p>
              <p className="text-gray-400 text-xs">Emergency & Scheduled Services</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Emergency Footer Banner */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-center space-x-4 text-white">
            <Phone className="h-5 w-5" />
            <span className="font-medium">Emergency? Call Now: 9593388865</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;