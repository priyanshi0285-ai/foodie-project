import React from 'react';
import { BsTruckFront } from "react-icons/bs";
import { FaShieldAlt } from "react-icons/fa";
import { LuHeartHandshake } from "react-icons/lu";
import { FaPhoneFlip } from "react-icons/fa6";

const features = [
  { icon:<BsTruckFront className="w-8 h-8 text-orange-500"/>, title:"Fast Delivery", description:"Get your food delivered in less than 30 minutes" },
  { icon:<FaShieldAlt className="w-8 h-8 text-orange-500"/>, title:"Safe Payment", description:"100% secure payment with multiple options" },
  { icon:<LuHeartHandshake className="w-8 h-8 text-orange-500"/>, title:"Best Quality", description:"Premium quality food from top-rated restaurants" },
  { icon:<FaPhoneFlip className="w-8 h-8 text-orange-500"/>, title:"24/7 Support", description:"Round the clock customer support service" },
];

const FeaturesSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Why Choose Foodie</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f,i)=>(
          <div key={i} className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition hover:-translate-y-2">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">{f.icon}</div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
