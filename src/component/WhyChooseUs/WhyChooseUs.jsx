import React from 'react';
import { Clock, Award, ThumbsUp, Wrench } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="bg-red-100 p-4 rounded-full mb-4">
      <Icon className="text-red-500" size={28} />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Certified Experts",
      description: "Our team consists of certified mechanics with years of experience in both automotive and train repair."
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "We value your time and strive to complete all repairs efficiently without compromising quality."
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "Our 98% customer satisfaction rate reflects our commitment to exceptional service."
    },
    {
      icon: Wrench,
      title: "Modern Equipment",
      description: "We use state-of-the-art diagnostic and repair equipment to handle all types of vehicles."
    }
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover what sets us apart from other repair services and why customers continue to trust us with their vehicles.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
