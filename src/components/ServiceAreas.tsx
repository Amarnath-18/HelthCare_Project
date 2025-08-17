import { motion } from 'framer-motion';
import { MapPin, Clock, CheckCircle } from 'lucide-react';

const ServiceAreas = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="service-areas" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
            We provide professional home healthcare services across these locations in Kolkata
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Service Areas Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-gradient-to-br from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 rounded-lg p-4 text-center hover:from-blue-100 hover:to-teal-100 dark:hover:from-blue-800/30 dark:hover:to-teal-800/30 transition-all duration-300 border border-blue-100 dark:border-blue-800/30 hover:border-blue-200 dark:hover:border-blue-700/50 hover:shadow-lg"
              >
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  {area}
                </h3>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
                Coverage Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Complete Coverage</h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                      We provide comprehensive healthcare services across all listed areas with no additional travel charges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Quick Response Time</h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                      Our healthcare professionals can reach you within 30-60 minutes in most areas during regular hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Expanding Coverage</h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                      Don't see your area listed? Contact us - we're continuously expanding our service coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-500 dark:to-teal-500 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">
                Need Service in Your Area?
              </h4>
              <p className="mb-4 opacity-90">
                Call us to confirm availability and schedule your home healthcare service
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:9593388865"
                  className="inline-flex items-center justify-center space-x-2 bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors"
                >
                  <span>Call: 9593388865</span>
                </a>
                <a
                  href="https://wa.me/9593388865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-green-500 dark:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 dark:hover:bg-green-700 transition-colors"
                >
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Coverage Map Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center transition-colors duration-200"
        >
          <div className="max-w-3xl mx-auto">
            <MapPin className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Serving North Kolkata & Surrounding Areas
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-200">
              Our service network covers key residential and commercial areas in North Kolkata, ensuring quick and reliable healthcare delivery to your doorstep.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceAreas.slice(0, 6).map((area, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200"
                >
                  {area}
                </span>
              ))}
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                +{serviceAreas.length - 6} more areas
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceAreas;