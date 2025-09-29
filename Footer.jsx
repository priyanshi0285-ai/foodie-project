import React from 'react';
import { LuMapPin } from "react-icons/lu";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
      <div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Foodie</h3>
        <p className="text-gray-400">Your favorite food delivery service bringing delicious meals to your doorstep.</p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="/" className="hover:text-orange-500">Home</a></li>
          <li><a href="/menu" className="hover:text-orange-500">Menu</a></li>
          <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
          <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Contact Info</h4>
        <p className="flex items-center text-gray-400"><LuMapPin  className="w-4 h-4 mr-2"/>123 Food Street, City</p>
        <p className="flex items-center text-gray-400"><FaPhoneFlip className="w-4 h-4 mr-2"/>+1 234 567 890</p>
        <p className="flex items-center text-gray-400"><IoIosMail className="w-4 h-4 mr-2"/>info@foodie.com</p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <a href="#" className="bg-gray-800 p-2 rounded hover:bg-orange-500"><FaFacebookF className="w-5 h-5"/></a>
          <a href="#" className="bg-gray-800 p-2 rounded hover:bg-orange-500"><FaTwitter className="w-5 h-5"/></a>
          <a href="#" className="bg-gray-800 p-2 rounded hover:bg-orange-500"><FaInstagram  className="w-5 h-5"/></a>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">&copy; 2025 Foodie. All rights reserved.</div>
  </footer>
);

export default Footer;
