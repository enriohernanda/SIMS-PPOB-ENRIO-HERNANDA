import React from 'react';

const MenuLayanan = ({ layanan }) => (
  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 mt-12">
    {layanan.map((item, index) => (
      <div key={index} className="flex flex-col items-center group cursor-pointer">
        <div className="w-14 h-14 mb-2 transition-transform group-hover:scale-110">
          <img src={item.ikon} alt={item.nama} className="w-full h-full object-contain" />
        </div>
        <span className="text-[11px] text-center text-gray-700 leading-tight">{item.nama}</span>
      </div>
    ))}
  </div>
);

export default MenuLayanan;
