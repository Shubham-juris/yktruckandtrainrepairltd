import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }) => (
  <div className="flex items-start mb-6">
    <div className="bg-red-100 p-3 rounded-full mr-4">
      <Icon className="text-red-500" size={20} />
    </div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(123) 456-7890"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@mechanix.com"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Repair Street, Mechanic City, MC 12345"
    },
    {
      icon: MessageSquare,
      title: "Working Hours",
      content: "Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 3:00 PM"
    }
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need to schedule a service? Reach out to us using any of the methods below or fill out the contact form.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            {contactInfo.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
          
          <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-red-200 focus:border-red-500 outline-none transition"
                    placeholder="Your name" 
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-red-200 focus:border-red-500 outline-none transition"
                    placeholder="Your email" 
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-red-200 focus:border-red-500 outline-none transition"
                  placeholder="Subject" 
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-red-200 focus:border-red-500 outline-none transition"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
