import React from 'react';
import { Users, Calendar, Award, Wrench } from 'lucide-react'; // Valid icons

const StatCard = ({ icon: Icon, count, label }) => (
  <div className="text-center p-6">
    <div className="flex justify-center mb-4">
      <Icon className="text-red-500" size={40} />
    </div>
    <h3 className="text-4xl font-bold mb-2">{count}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

const Stats = () => {
  const stats = [
    {
      icon: Users,
      count: "5,000+",
      label: "Satisfied Customers"
    },
    {
      icon: Calendar,
      count: "20+",
      label: "Years Experience"
    },
    {
      icon: Award,
      count: "15",
      label: "Industry Awards"
    },
    {
      icon: Wrench, // Changed from Tool
      count: "10,000+",
      label: "Repairs Completed"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
