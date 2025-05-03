import React from 'react';

const Gallery = () => {
  const images = [
    { src: "/api/placeholder/400/300", alt: "Car Engine Repair" },
    { src: "/api/placeholder/400/300", alt: "Train Maintenance" },
    { src: "/api/placeholder/400/300", alt: "Brake Service" },
    { src: "/api/placeholder/400/300", alt: "Electrical Diagnostics" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work Gallery</h2>
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
