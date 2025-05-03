import React from 'react';

const CTABanner = () => {
  return (
    <section className="bg-red-500 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Your Vehicle Fixed?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Schedule an appointment today and experience our professional repair services for both cars and trains.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="bg-white text-red-500 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition duration-300">
            Book an Appointment
          </a>
          <a href="tel:+11234567890" className="bg-transparent border-2 border-white hover:bg-white hover:text-red-500 px-6 py-3 rounded-lg font-medium transition duration-300">
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
