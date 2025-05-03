import React from 'react';

const TeamMember = ({ name, role, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img 
      src={image} 
      alt={name} 
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-500">{role}</p>
      <div className="mt-4 flex space-x-3">
        <a href="#" className="text-gray-500 hover:text-red-500 transition">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-red-500 transition">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-gray-500 hover:text-red-500 transition">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </div>
  </div>
);

const Team = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Lead Mechanic",
      image: "/api/placeholder/400/500"
    },
    {
      name: "Emily Johnson",
      role: "Train Systems Engineer",
      image: "/api/placeholder/400/500"
    },
    {
      name: "Michael Davis",
      role: "Electrical Specialist",
      image: "/api/placeholder/400/500"
    },
    {
      name: "Sarah Wilson",
      role: "Customer Relations",
      image: "/api/placeholder/400/500"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experts brings years of experience and dedication to every repair job.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
