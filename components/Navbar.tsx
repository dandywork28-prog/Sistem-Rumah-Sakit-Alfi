import React from 'react';
import { Building2 } from 'lucide-react';

interface NavbarProps {
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLogin }) => {
  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Jadwal Dokter', href: '#dokter' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-teal-600 flex items-center gap-2">
          <Building2 className="w-8 h-8" />
          <span>RS. Sehat Sejahtera</span>
        </a>
        
        <div className="hidden md:flex space-x-8 font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={onOpenLogin} 
            className="bg-teal-600 text-white px-5 py-2 rounded-full hover:bg-teal-700 transition-colors duration-200 shadow-lg font-medium"
          >
            Login Sistem
          </button>
        </div>
      </div>
    </nav>
  );
};