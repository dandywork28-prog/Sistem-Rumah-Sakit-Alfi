import React from 'react';
import { UserPlus, CalendarCheck, Ambulance } from 'lucide-react';

export const Stats: React.FC = () => {
  const cards = [
    {
      icon: <UserPlus className="w-10 h-10" />,
      title: "Cari Dokter",
      desc: "Temukan dokter spesialis sesuai kebutuhan Anda dengan jadwal yang fleksibel.",
      colorClass: "text-teal-600",
      borderClass: "border-teal-500",
      action: "Membuka fitur Pencarian Dokter..."
    },
    {
      icon: <CalendarCheck className="w-10 h-10" />,
      title: "Booking Online",
      desc: "Hindari antrian panjang dengan mendaftar rawat jalan secara online.",
      colorClass: "text-blue-500",
      borderClass: "border-blue-500",
      action: "Membuka form Booking Online..."
    },
    {
      icon: <Ambulance className="w-10 h-10" />,
      title: "IGD 24 Jam",
      desc: "Pelayanan gawat darurat siap siaga 24/7 dengan armada ambulans lengkap.",
      colorClass: "text-red-500",
      borderClass: "border-red-500",
      action: "Menghubungi layanan Emergency..."
    }
  ];

  return (
    <section className="container mx-auto px-6 -mt-20 relative z-20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index}
            onClick={() => alert(card.action)}
            className={`bg-white p-8 rounded-xl shadow-xl border-t-4 ${card.borderClass} hover:-translate-y-2 transition duration-300 cursor-pointer group`}
          >
            <div className={`${card.colorClass} mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {card.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-teal-700 transition-colors">{card.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};