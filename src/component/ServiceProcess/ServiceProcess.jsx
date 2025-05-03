import React from 'react';
import { ClipboardCheck, Wrench, CheckCircle, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const ProcessStep = ({ icon: Icon, title, description, number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: number * 0.2 }}
    viewport={{ once: true }}
    className="flex flex-col items-center relative"
  >
    <div className="relative z-10">
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 355,
          transition: { duration: 0.3 },
        }}
        className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center text-white text-xl font-bold shadow-lg"
      >
        {number}
      </motion.div>

     
      {number < 4 && (
        <div className="hidden md:block absolute top-1/2 left-full w-20 border-t-2 border-dashed border-red-300 transform translate-y-[-50%]"></div>
      )}
    </div>

    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: '0 4px 20px rgba(255, 0, 0, 0.3)',
      }}
      className="bg-white p-6 rounded-xl shadow-md text-center mt-4 w-full transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex justify-center mb-4">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="text-red-500"
        >
          <Icon size={32} />
        </motion.div>
      </div>
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          color: '#f87171',
          transition: { duration: 0.3 },
        }}
        className="text-lg font-semibold mb-2 text-gray-800"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-600 text-sm"
      >
        {description}
      </motion.p>
    </motion.div>
  </motion.div>
);

const ServiceProcess = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Schedule Appointment',
      description: 'Contact us to book a convenient appointment.',
      number: 1,
    },
    {
      icon: ClipboardCheck,
      title: 'Diagnostic Assessment',
      description: 'Our experts conduct a thorough assessment of your vehicle.',
      number: 2,
    },
    {
      icon: Wrench,
      title: 'Repair Service',
      description: 'We repair your vehicle using quality parts and equipment.',
      number: 3,
    },
    {
      icon: CheckCircle,
      title: 'Quality Check',
      description: 'Final inspection to ensure everything is working perfectly.',
      number: 4,
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn about our streamlined repair process designed to get you back on the road quickly.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
