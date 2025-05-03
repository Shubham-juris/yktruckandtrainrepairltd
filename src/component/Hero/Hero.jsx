import React from 'react';
import { ChevronRight } from 'lucide-react';
import Bg from "../../assets/HomeImg/HomeBg.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gray-900 text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Professional Car & Train Repair Services
          </h1>
          <p className="text-xl mb-8">
            Expert mechanics, quality parts, and guaranteed satisfaction for all your vehicle repair needs.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#services"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center"
            >
              Our Services <ChevronRight size={20} className="ml-1" />
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
