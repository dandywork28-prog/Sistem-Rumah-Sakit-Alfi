import React from 'react';
import { Stethoscope, Smile, Baby, Microscope } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    { name: "Poli Umum", icon: <Stethoscope className="w-12 h-12 text-teal-600" /> },
    { name: "Poli Gigi", icon: <Smile className="w-12 h-12 text-teal-600" /> },
    { name: "Poli Anak", icon: <Baby className="w-12 h-12 text-teal-600" /> },
    { name: "Laboratorium", icon: <Microscope className="w-12 h-12 text-teal-600" /> },
  ];

  return (
    <section id="layanan" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800">Layanan Unggulan</h2>
          <div className="h-1 w-20 bg-teal-600 mx-auto mt-2 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-gray-100 flex flex-col items-center"
            >
              <div className="mb-4 p-4 bg-teal-50 rounded-full">
                {service.icon}
              </div>
              <h4 className="font-bold text-lg text-gray-800">{service.name}</h4>
              <p className="text-gray-400 text-xs mt-2">Pelayanan terbaik oleh tenaga ahli.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};