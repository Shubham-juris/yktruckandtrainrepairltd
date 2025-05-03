import React, { useEffect, useRef, useState } from 'react';
import { Users, Calendar, Award, Wrench } from 'lucide-react';

const StatCard = ({ icon: Icon, count, label }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [currentCount, setCurrentCount] = useState(0);

  const end = parseInt(count.replace(/[^0-9]/g, '')); // extract digits
  const hasPlus = count.includes('+');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
          setCurrentCount(0); // Reset on scroll away
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 1500;
    const incrementTime = 30;
    const totalSteps = duration / incrementTime;
    const increment = end / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCurrentCount(end);
        clearInterval(counter);
      } else {
        setCurrentCount(Math.ceil(start));
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [visible, end]);

  const formattedCount = hasPlus
    ? `${currentCount.toLocaleString()}+`
    : currentCount.toLocaleString();

  return (
    <div
      ref={ref}
      className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
    >
      <div className="flex justify-center mb-4">
        <Icon className="text-red-500" size={40} />
      </div>
      <h3 className="text-4xl font-bold text-gray-900 mb-2">{formattedCount}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: Users,
      count: "5000+",
      label: "Satisfied Customers",
    },
    {
      icon: Calendar,
      count: "20+",
      label: "Years Experience",
    },
    {
      icon: Award,
      count: "15",
      label: "Industry Awards",
    },
    {
      icon: Wrench,
      count: "10000+",
      label: "Repairs Completed",
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="stats">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
