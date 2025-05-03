import React from "react";
import { CheckCircle } from "lucide-react";
import aboutImage from "../../assets/image/AboutImage1.jpg";
const About = () => {
  const highlights = [
    "Over 20 years of experience in vehicle repair",
    "Certified mechanics and train engineers",
    "State-of-the-art equipment and facilities",
    "Genuine parts and quality materials",
    "Quick turnaround times with excellent results",
    "Comprehensive warranty on all services",
  ];

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src={aboutImage}
              alt="About MechaniX"
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About MechaniX
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in 2000, MechaniX has grown to become the leading car and
              train repair service provider in the region. Our commitment to
              quality, reliability, and customer satisfaction has earned us a
              reputation for excellence in the industry.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of certified mechanics and train engineers brings decades
              of combined experience to every repair job, ensuring your vehicles
              receive the best possible care and attention.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
