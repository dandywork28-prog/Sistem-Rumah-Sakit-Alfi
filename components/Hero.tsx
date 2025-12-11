import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section 
      id="beranda" 
      className="relative h-screen flex items-center justify-center text-center text-white px-6"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 128, 128, 0.8), rgba(0, 128, 128, 0.6)), url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-3xl animate-fade-in-up z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Pelayanan Kesehatan <br/> Terpadu & Digital
        </h1>
        <p className="text-xl mb-8 text-gray-100 font-light">
          Solusi Sistem Informasi Manajemen Rumah Sakit yang terintegrasi, cepat, dan akurat untuk pasien dan tenaga medis.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="#layanan" 
            className="bg-white text-teal-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg transform hover:scale-105 duration-200"
          >
            Lihat Layanan
          </a>
          <button 
            onClick={() => alert('Fitur Pendaftaran Online akan aktif setelah backend terhubung.')} 
            className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-teal-600 transition transform hover:scale-105 duration-200"
          >
            Daftar Online
          </button>
        </div>
      </div>
    </section>
  );
};