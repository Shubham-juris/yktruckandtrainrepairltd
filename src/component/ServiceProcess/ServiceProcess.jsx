import React from 'react';
import { ClipboardCheck, Wrench, CheckCircle, MessageSquare } from 'lucide-react';

const ProcessStep = ({ icon: Icon, title, description, number }) => (
  <div className="flex flex-col items-center">
    <div className="relative">
      <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold mb-4">
        {number}
      </div>
      {number < 4 && <div className="hidden md:block absolute top-8 left-full w-full border-t-2 border-dashed border-red-300"></div>}
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md text-center mt-4 w-full">
      <div className="flex justify-center mb-4">
        <Icon className="text-red-500" size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ServiceProcess = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Schedule Appointment",
      description: "Contact us to schedule an appointment that fits your schedule.",
      number: 1
    },
    {
      icon: ClipboardCheck,
      title: "Diagnostic Assessment",
      description: "Our experts conduct a thorough assessment of your vehicle.",
      number: 2
    },
    {
      icon: Wrench, // Replaced Tool with Wrench
      title: "Repair Service",
      description: "We repair your vehicle using quality parts and equipment.",
      number: 3
    },
    {
      icon: CheckCircle,
      title: "Quality Check",
      description: "Final inspection to ensure everything is working perfectly.",
      number: 4
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Service Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn about our streamlined repair process designed to get you back on the road quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
