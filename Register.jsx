import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = e=>{
    e.preventDefault();
    alert(`Registered as ${email}`);
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleRegister} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 mb-4 border rounded"/>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full p-3 mb-4 border rounded"/>
        <button type="submit" className="w-full py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition">Register</button>
        <p className="mt-4 text-center text-gray-500">Already have an account? <a href="/login" className="text-orange-500">Login</a></p>
      </form>
    </div>
  );
};

export default Register;
