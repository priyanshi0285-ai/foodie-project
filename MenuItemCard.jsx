import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
const MenuItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const itemInCart = cartItems.find(i => i.id === item.id);
  const [adding, setAdding] = useState(false);

  const handleAdd = () => {
    setAdding(true);
    dispatch(addToCart(item));
    setTimeout(() => setAdding(false), 300);
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4 hover:shadow-xl transition">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-4"/>
      <div className="flex justify-between mb-2">
        <span className="font-bold text-lg">{item.name}</span>
        <span className="text-orange-500 font-bold">${item.price}</span>
      </div>
      <p className="text-gray-600 mb-4">{item.description}</p>
      {itemInCart ? (
        <div className="flex items-center">
          <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-gray-100 p-2 rounded"><FaMinus/></button>
          <span className="px-2">{itemInCart.quantity}</span>
          <button onClick={handleAdd} className="bg-gray-100 p-2 rounded"><FaPlus/></button>
        </div>
      ) : (
        <button onClick={handleAdd} className={`w-full py-2 rounded bg-gradient-to-r from-orange-500 to-red-500 text-white ${adding ? 'scale-95' : 'hover:scale-105'} transition`}>Add to Cart</button>
      )}
    </div>
  );
};

export default MenuItemCard;
