import React, { useEffect } from 'react';
import { Wrench, BusFront, Settings, Battery, Thermometer, Gauge } from 'lucide-react'; // Replaced Speedometer with Gauge
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    <div className="bg-red-100 p-3 rounded-full inline-block mb-4">
      <Icon className="text-red-500" size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      icon: Settings,
      title: "Engine Repair",
      description: "Complete diagnostics and repair for all engine types to restore optimal performance."
    },
    {
      icon: BusFront,
      title: "Train Systems",
      description: "Specialized maintenance and repair services for train systems and components."
    },
    {
      icon: Battery,
      title: "Electrical Systems",
      description: "Comprehensive electrical diagnostics and repair for modern vehicles."
    },
    {
      icon: Thermometer,
      title: "A/C & Heating",
      description: "Complete climate control system repairs to keep you comfortable all year."
    },
    {
      icon: Gauge, // Replaced Speedometer with Gauge
      title: "Brake Services",
      description: "Professional brake inspection, repair, and replacement for optimal safety."
    },
    {
      icon: Wrench,
      title: "General Maintenance",
      description: "Regular maintenance services to keep your vehicles in peak condition."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive repair and maintenance services for both cars and trains, ensuring peak performance and longevity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
