import React from 'react';
import { Clock, Award, ThumbsUp, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: index * 0.2 }}
    viewport={{ once: true }}
    whileHover={{
      scale: 1.1,
      boxShadow: '0px 4px 20px rgba(255, 0, 0, 0.5)',
      transition: { duration: 0.3 },
    }}
    className="relative group p-[2px] rounded-xl bg-gradient-to-tr from-red-500 via-red-300 to-yellow-400"
  >
    <div className="flex flex-col items-center text-center bg-gray-900 rounded-xl px-6 py-8 backdrop-blur-md w-full h-full group-hover:shadow-xl transition-all duration-300">
      <motion.div
        initial={{ x: -10 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, type: 'spring', stiffness: 100 }}
        className="bg-red-200 p-4 rounded-full mb-4"
      >
        <Icon className="text-red-600" size={30} />
      </motion.div>
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white text-xl font-semibold mb-2"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-300 text-sm"
      >
        {description}
      </motion.p>
    </div>
  </motion.div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Certified Experts',
      description:
        'Our team consists of certified mechanics with years of experience in both automotive and train repair.',
    },
    {
      icon: Clock,
      title: 'Quick Service',
      description:
        'We value your time and strive to complete all repairs efficiently without compromising quality.',
    },
    {
      icon: ThumbsUp,
      title: 'Customer Satisfaction',
      description:
        'Our 98% customer satisfaction rate reflects our commitment to exceptional service.',
    },
    {
      icon: Wrench,
      title: 'Modern Equipment',
      description:
        'We use state-of-the-art diagnostic and repair equipment to handle all types of vehicles.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Discover what makes our services stand out and why customers trust us year after year.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
