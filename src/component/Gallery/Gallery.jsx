import React from "react";
import image from "../../assets/image/CarRepair.jpg";
import image2 from "../../assets/image/trainRepair.jpg";
import image3 from "../../assets/image/dyg.jpg";
import image4 from "../../assets/image/trainRepair.jpg";
const Gallery = () => {
  const images = [
    { src: image, alt: "Car Engine Repair" },
    { src: image2, alt: "Train Maintenance" },
    { src: image3, alt: "Brake Service" },
    { src: image4, alt: "Electrical Diagnostics" },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Work Gallery 
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at some of our recent repair and maintenance projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
