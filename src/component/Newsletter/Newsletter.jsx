import React from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <div className="flex items-center mb-4">
              <Mail className="text-red-500 mr-3" size={24} />
              <h3 className="text-2xl font-bold">Subscribe to Our Newsletter</h3>
            </div>
            <p className="text-gray-300">
              Stay updated with our latest services, promotions, and automotive tips.
            </p>
          </div>
          
          <div className="w-full md:w-1/2">
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-3 rounded-lg focus:outline-none focus:ring focus:ring-red-200 flex-grow"
              />
              <button 
                type="submit" 
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
