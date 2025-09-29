import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../redux/cartSlice';
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoMenu } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <RxCross2 /> : <IoMenu />}
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Foodie</h1>
        </div>

        <nav className={`lg:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="/" className="hover:text-orange-500">Home</a>
          <a href="/menu" className="hover:text-orange-500">Menu</a>
          <a href="/about" className="hover:text-orange-500">About</a>
          <a href="/contact" className="hover:text-orange-500">Contact</a>
          <a href="/login" className="hover:text-orange-500">Login</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button><FaUser /></button>
          <button onClick={() => dispatch(toggleCart())} className="relative">
            <MdOutlineShoppingCart />
            {totalItems > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{totalItems}</span>}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
