import React from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactInfo = ({ icon: Icon, title, content, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex items-start mb-6"
  >
    <div className="bg-red-100 p-3 rounded-full mr-4 shadow-sm">
      <Icon className="text-red-500" size={20} />
    </div>
    <div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{content}</p>
    </div>
  </motion.div>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(123) 456-7890',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@yktruckandtrainrepairltd.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Repair Street, Abc City, MC 12345',
    },
    {
      icon: MessageSquare,
      title: 'Working Hours',
      content: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 3:00 PM',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need to schedule a service? Reach out to us using any method below or send us a message.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <motion.h3
              className="text-2xl font-semibold mb-6 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h3>

            {contactInfo.map((info, index) => (
              <ContactInfo key={index} {...info} delay={index * 0.2} />
            ))}
          </div>

          <motion.div
            className="lg:w-1/2 bg-white p-6 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-200 focus:border-red-500 outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-200 focus:border-red-500 outline-none"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-200 focus:border-red-500 outline-none"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-1" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-200 focus:border-red-500 outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
