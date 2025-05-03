import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, content, rating }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          size={18} 
          className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
        />
      ))}
    </div>
    <p className="text-gray-600 mb-6 italic">"{content}"</p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Robert Johnson",
      role: "Car Owner",
      content: "The team at MechaniX fixed my car's engine issue that two other shops couldn't figure out. Fast, reliable, and honest service at a fair price.",
      rating: 5
    },
    {
      name: "Sarah Davis",
      role: "Fleet Manager",
      content: "We've been using MechaniX for our entire fleet maintenance for 5 years now. Their attention to detail and proactive approach has saved us from costly breakdowns.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "Train Operator",
      content: "Their knowledge of train systems is impressive. They diagnosed and fixed an electrical issue that had been causing problems for months. Highly recommended!",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
