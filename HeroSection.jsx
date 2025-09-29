import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  const [search, setSearch] = useState('');
  
  return (
    <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-4">Delicious Food <span className="text-orange-500">Delivered</span></h2>
        <p className="text-xl text-gray-600 mb-8">Order from your favorite restaurants and enjoy at home.</p>
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search for food..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-6 py-3 rounded-full border-2 border-gray-200 focus:border-orange-500 outline-none"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 p-3 rounded-full">
            <FaSearch className="w-5 h-5 text-white"/>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
