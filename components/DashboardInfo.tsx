import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const DashboardInfo: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 relative">
          <div className="absolute inset-0 bg-teal-600 rounded-xl transform rotate-3 opacity-10"></div>
          <img 
            src="https://picsum.photos/800/600" 
            alt="Dashboard SIRS" 
            className="rounded-xl shadow-2xl relative z-10 w-full object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <span className="text-teal-600 font-bold tracking-wider uppercase text-sm bg-teal-50 px-3 py-1 rounded-full">Dashboard Admin</span>
          <h2 className="text-3xl font-bold mt-4 mb-4 text-gray-900">Kelola Data Pasien dengan Mudah</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Sistem Informasi Rumah Sakit kami dilengkapi dengan dashboard admin yang user-friendly untuk mengelola rekam medis elektronik (RME), stok obat, jadwal dokter, dan tagihan pasien secara real-time.
          </p>
          <ul className="space-y-4">
            {[
              "Integrasi BPJS (V-Claim)",
              "Laporan Keuangan Otomatis",
              "Manajemen Apotek & Gudang"
            ].map((item, i) => (
              <li key={i} className="flex items-center text-gray-700 font-medium">
                <CheckCircle2 className="text-teal-500 mr-3 w-5 h-5" /> 
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};