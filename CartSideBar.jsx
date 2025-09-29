import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart, addToCart, removeFromCart, clearCart } from '../redux/cartSlice';
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const CartSidebar = () => {
  const dispatch = useDispatch();
  const { items, totalAmount, isCartOpen } = useSelector(s => s.cart);
  const [checkoutLoading, setCheckoutLoading] = useState(false);

  const handleCheckout = () => {
    setCheckoutLoading(true);
    setTimeout(() => {
      alert("Order placed successfully!");
      dispatch(clearCart());
      dispatch(toggleCart());
      setCheckoutLoading(false);
    }, 2000);
  };
  return (
    <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 transition-transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={() => dispatch(toggleCart())}><RxCross2 /></button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <MdOutlineShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
                  <img src={item.image} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h3>{item.name}</h3>
                    <p>${(item.price)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="bg-white p-1 rounded hover:bg-gray-200"
                      >
                        <FaMinus className="w-4 h-4" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => dispatch(addToCart(item))}
                        className="bg-white p-1 rounded hover:bg-gray-200"
                      >
                        <FaPlus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="font-bold">${(item.price * item.quantity)}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Total & Checkout */}
        {items.length > 0 && (
          <div className="border-t p-6">
            <div className="flex justify-between mb-4">
              <span className="text-xl font-medium">Total:</span>
              <span className="text-2xl font-bold text-orange-500">${(totalAmount)}</span>
            </div>
            <button
              disabled={checkoutLoading}
              onClick={handleCheckout}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:scale-105 transition-all disabled:opacity-50"
            >
              {checkoutLoading ? "Processing..." : "Checkout"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartSidebar;
