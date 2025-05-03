import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isOpen && (
        <div className="mt-2 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "How often should I service my car?",
      answer: "We recommend servicing your car every 10,000 miles or once a year, whichever comes first. However, this can vary depending on the make, model, and age of your vehicle."
    },
    {
      question: "Do you provide warranty on repairs?",
      answer: "Yes, we offer a 12-month/12,000-mile warranty on all repairs. This covers both parts and labor, giving you peace of mind after service."
    },
    {
      question: "What types of train systems do you service?",
      answer: "We service a wide range of train systems including diesel, electric, and hybrid trains. Our specialists are trained to work on electrical systems, braking systems, engines, and more."
    },
    {
      question: "How long does a typical repair take?",
      answer: "The repair time depends on the specific issue and vehicle type. Minor repairs might take a few hours, while major repairs could take a few days. We always provide an estimated timeline before starting work."
    },
    {
      question: "Do you offer pickup and delivery services?",
      answer: "Yes, we offer pickup and delivery services within a 20-mile radius of our location. There's a small fee for this service, but it's free for repairs exceeding $500."
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to some of the most common questions about our services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
