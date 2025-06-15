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
    <section id="service-areas" className="py-20 bg-white">
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
            Service Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                className="group bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-4 text-center hover:from-blue-100 hover:to-teal-100 transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-center justify-center mb-2">
                  <MapPin className="h-5 w-5 text-blue-600 group-hover:text-blue-700" />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Coverage Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Complete Coverage</h4>
                    <p className="text-gray-600">
                      We provide comprehensive healthcare services across all listed areas with no additional travel charges.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quick Response Time</h4>
                    <p className="text-gray-600">
                      Our healthcare professionals can reach you within 30-60 minutes in most areas during regular hours.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expanding Coverage</h4>
                    <p className="text-gray-600">
                      Don't see your area listed? Contact us - we're continuously expanding our service coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">
                Need Service in Your Area?
              </h4>
              <p className="mb-4 opacity-90">
                Call us to confirm availability and schedule your home healthcare service
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:9593388865"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <span>Call: 9593388865</span>
                </a>
                <a
                  href="https://wa.me/9593388865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
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
          className="mt-16 bg-gray-50 rounded-2xl p-8 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Serving North Kolkata & Surrounding Areas
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our service network covers key residential and commercial areas in North Kolkata, ensuring quick and reliable healthcare delivery to your doorstep.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {serviceAreas.slice(0, 6).map((area, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {area}
                </span>
              ))}
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
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