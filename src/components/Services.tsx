import { motion } from 'framer-motion';
import { Activity, Syringe, TestTube, Heart, Droplets, Ban as Bandage, MoreHorizontal, Stethoscope } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Activity,
      title: 'Blood Pressure Measurement',
      description: 'Regular monitoring and assessment of blood pressure levels with professional equipment.'
    },
    {
      icon: Syringe,
      title: 'IV, IM Injections',
      description: 'Safe administration of intravenous and intramuscular injections by certified professionals.'
    },
    {
      icon: TestTube,
      title: 'CBG Analysis',
      description: 'Capillary blood glucose testing and monitoring for diabetes management.'
    },
    {
      icon: Droplets,
      title: 'Urinary Catheterization',
      description: 'Professional catheter insertion and management with sterile technique.'
    },
    {
      icon: Heart,
      title: 'IV Cannulation',
      description: 'Expert IV line insertion for medication administration and fluid therapy.'
    },
    {
      icon: TestTube,
      title: 'Blood Sample Collection',
      description: 'Safe and hygienic blood collection for laboratory testing and analysis.'
    },
    {
      icon: Bandage,
      title: 'Dressing',
      description: 'Professional wound care and dressing changes for optimal healing.'
    },
    {
      icon: Stethoscope,
      title: 'Nasogastric (NG) tube insertion',
      description: 'Expert insertion and management of nasogastric tubes for feeding or drainage.'
    },
    {
      icon: MoreHorizontal,
      title: 'And Many More...',
      description: 'Comprehensive healthcare services tailored to your specific medical needs.'
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
    <section id="services" className="py-20 bg-white">
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
            Our Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services delivered to your home with professional care and attention to detail.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Professional Medical Care at Home?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Contact us today for reliable, professional healthcare services
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;