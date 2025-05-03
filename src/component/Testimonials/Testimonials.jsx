import React from 'react';
import { Star } from 'lucide-react';
import Owner1 from "../../assets/CarOwner/Owner1.png";
import Owner2 from "../../assets/CarOwner/Owner3.png";
import Owner3 from "../../assets/CarOwner/Owner2.png";

const TestimonialCard = ({ name, role, content, rating, Image }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
        />
      ))}
    </div>
    <p className="text-gray-700 mb-6 italic leading-relaxed">"{content}"</p>
    <div className="flex items-center">
      <img
        src={Image}
        alt={name}
        className="w-12 h-12 rounded-full object-cover border-2 border-red-500 mr-4"
      />
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Robert Johnson",
      Image: Owner1,
      role: "Car Owner",
      content:
        "The team at MechaniX fixed my car's engine issue that two other shops couldn't figure out. Fast, reliable, and honest service at a fair price.",
      rating: 5,
    },
    {
      name: "Sarah Davis",
      Image: Owner2,
      role: "Fleet Manager",
      content:
        "We've been using MechaniX for our entire fleet maintenance for 5 years now. Their attention to detail and proactive approach has saved us from costly breakdowns.",
      rating: 5,
    },
    {
      name: "Michael Thompson",
      Image: Owner3,
      role: "Train Operator",
      content:
        "Their knowledge of train systems is impressive. They diagnosed and fixed an electrical issue that had been causing problems for months. Highly recommended!",
      rating: 4,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don’t just take our word for it—see how MechaniX has made a difference for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
