import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="kontak" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-6 text-teal-400">RS. Sehat Sejahtera</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Memberikan pelayanan kesehatan terbaik dengan dukungan teknologi informasi terkini untuk masa depan yang lebih sehat.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6 text-teal-400">Kontak Kami</h3>
          <ul className="text-gray-400 text-sm space-y-4">
            <li className="flex items-start">
              <MapPin className="mr-3 w-5 h-5 text-teal-500 mt-0.5" /> 
              <span>Jl. Kesehatan No. 123, Jakarta Selatan, DKI Jakarta</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-3 w-5 h-5 text-teal-500" /> 
              <span>(021) 555-0123</span>
            </li>
            <li className="flex items-center">
              <Mail className="mr-3 w-5 h-5 text-teal-500" /> 
              <span>info@rs-sehat.com</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-6 text-teal-400">Jam Operasional</h3>
          <div className="space-y-2">
            <div className="bg-gray-800 p-3 rounded-lg border-l-4 border-teal-500">
                <p className="text-gray-300 text-sm font-bold">IGD</p>
                <p className="text-gray-400 text-xs">24 Jam (Setiap Hari)</p>
            </div>
            <div className="bg-gray-800 p-3 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-300 text-sm font-bold">Poliklinik</p>
                <p className="text-gray-400 text-xs">Senin - Sabtu (08:00 - 16:00)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm mt-12 pt-8 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Sistem Informasi Rumah Sakit Sehat Sejahtera. All rights reserved.
      </div>
    </footer>
  );
};