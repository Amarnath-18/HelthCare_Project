import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Clock, Phone, CheckCircle, Shield, Star } from 'lucide-react';
import { getServiceById, getSubServiceById } from '../data/servicesData';

const SubServiceDetailPage = () => {
  const { serviceId, subServiceId } = useParams<{ serviceId: string; subServiceId: string }>();
  const service = serviceId ? getServiceById(serviceId) : undefined;
  const subService = serviceId && subServiceId ? getSubServiceById(serviceId, subServiceId) : undefined;

  if (!service || !subService) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            to="/services"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = subService.icon;

  const features = [
    'Certified healthcare professionals',
    'Sterile equipment and procedures',
    'Home visit convenience',
    'Professional consultation',
    '24/7 customer support',
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center space-x-2 text-sm"
        >
          <Link to="/services" className="text-blue-600 hover:text-blue-700">
            Services
          </Link>
          <span className="text-gray-400">/</span>
          <Link to={`/services/${serviceId}`} className="text-blue-600 hover:text-blue-700">
            {service.name}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{subService.name}</span>
        </motion.div>

        {/* Back Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <Link
            to={`/services/${serviceId}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to {service.name}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Service Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <IconComponent className="h-10 w-10 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {subService.name}
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {subService.description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Service Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg mb-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Pricing</h3>
                    <p className="text-gray-600">{subService.price}</p>
                  </div>
                </div>
                {subService.duration && (
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Duration</h3>
                      <p className="text-gray-600">{subService.duration}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg sticky top-24"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {subService.price}
                </div>
                {subService.duration && (
                  <div className="text-gray-600">
                    Duration: {subService.duration}
                  </div>
                )}
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span>Licensed professionals</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>5-star rated service</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <span>24/7 support available</span>
                </div>
              </div>

              <div className="space-y-3">
                <Link
                  to="/contact"
                  className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
                >
                  Book This Service
                </Link>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-4 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Call: +91 98765 43210
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubServiceDetailPage;
