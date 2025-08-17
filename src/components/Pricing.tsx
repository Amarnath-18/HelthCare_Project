import { motion } from 'framer-motion';
import { Activity, Syringe, TestTube, Droplets, Heart, Ban as Bandage, IndianRupee, Stethoscope } from 'lucide-react';

const Pricing = () => {
  const services = [
    {
      icon: Activity,
      title: 'Blood Pressure Measurement',
      price: 50,
      description: 'Professional BP monitoring with digital equipment'
    },
    {
      icon: Syringe,
      title: 'IV & IM Injections',
      price: 100,
      description: 'Safe administration of intravenous and intramuscular injections'
    },
    {
      icon: TestTube,
      title: 'CBG Analysis',
      price: 100,
      description: 'Capillary blood glucose testing for diabetes monitoring'
    },
    {
      icon: Droplets,
      title: 'Urinary Catheterization',
      price: 700,
      description: 'Professional catheter insertion with sterile technique'
    },
    {
      icon: Heart,
      title: 'IV Cannulation',
      price: 200,
      description: 'Expert IV line insertion for medication administration'
    },
    {
      icon: TestTube,
      title: 'Blood Sample Collection',
      price: 'No extra charge',
      description: 'Free collection service according to blood test requirements',
      isSpecial: true
    },
    {
      icon: Bandage,
      title: 'Wound Dressing',
      price: '400 onwards',
      description: 'Professional wound care according to condition severity',
      isVariable: true
    },
    {
      icon: Stethoscope,
      title: 'Nasogastric (NG) tube insertion',
      price: 700,
      description: 'Expert insertion and management of nasogastric tubes for feeding or drainage'
    }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
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
            Service Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
            Transparent and affordable pricing for professional home healthcare services
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  service.isSpecial 
                    ? 'border-green-200 dark:border-green-600/30 bg-green-50 dark:bg-green-900/20' 
                    : service.isVariable 
                    ? 'border-orange-200 dark:border-orange-600/30 bg-orange-50 dark:bg-orange-900/20' 
                    : 'border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-500'
                }`}
              >
                <div className="mb-4">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                    service.isSpecial 
                      ? 'bg-green-100 dark:bg-green-800/30 group-hover:bg-green-600 dark:group-hover:bg-green-600' 
                      : service.isVariable 
                      ? 'bg-orange-100 dark:bg-orange-800/30 group-hover:bg-orange-600 dark:group-hover:bg-orange-600' 
                      : 'bg-blue-100 dark:bg-blue-800/30 group-hover:bg-blue-600 dark:group-hover:bg-blue-600'
                  }`}>
                    <IconComponent className={`h-8 w-8 transition-colors duration-300 ${
                      service.isSpecial 
                        ? 'text-green-600 dark:text-green-400 group-hover:text-white' 
                        : service.isVariable 
                        ? 'text-orange-600 dark:text-orange-400 group-hover:text-white' 
                        : 'text-blue-600 dark:text-blue-400 group-hover:text-white'
                    }`} />
                  </div>
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 transition-colors ${
                  service.isSpecial 
                    ? 'text-green-800 dark:text-green-300 group-hover:text-green-600 dark:group-hover:text-green-400' 
                    : service.isVariable 
                    ? 'text-orange-800 dark:text-orange-300 group-hover:text-orange-600 dark:group-hover:text-orange-400' 
                    : 'text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400'
                }`}>
                  {service.title}
                </h3>
                
                <div className="mb-4">
                  {typeof service.price === 'number' ? (
                    <div className="flex items-center space-x-1">
                      <IndianRupee className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{service.price}</span>
                    </div>
                  ) : (
                    <div className={`text-2xl font-bold ${
                      service.isSpecial ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'
                    }`}>
                      {service.price}
                    </div>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
                  {service.description}
                </p>

                {service.isSpecial && (
                  <div className="mt-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-700/50 rounded-lg p-3">
                    <p className="text-green-700 dark:text-green-300 text-sm font-medium">
                      ✓ Complimentary service with blood tests
                    </p>
                  </div>
                )}

                {service.isVariable && (
                  <div className="mt-4 bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-700/50 rounded-lg p-3">
                    <p className="text-orange-700 dark:text-orange-300 text-sm font-medium">
                      ⚡ Price varies based on wound complexity
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg transition-colors duration-200"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Important Pricing Information
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">₹</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">All prices in Indian Rupees (INR)</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Transparent pricing with no hidden charges</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 dark:text-green-400 text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">24/7 Emergency Services</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Emergency charges may apply for after-hours services</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-bold">🏠</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Home Visit Available</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Additional travel charges within service area</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-orange-600 dark:text-orange-400 text-sm font-bold">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Free Consultation</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">Call us for detailed pricing on complex procedures</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;