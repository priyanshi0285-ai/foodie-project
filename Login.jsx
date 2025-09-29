import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = e=>{
    e.preventDefault();
    alert(`Logged in as ${email}`);
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 mb-4 border rounded"/>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full p-3 mb-4 border rounded"/>
        <button type="submit" className="w-full py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition">Login</button>
        <p className="mt-4 text-center text-gray-500">Don't have an account? <a href="/register" className="text-orange-500">Register</a></p>
      </form>
    </div>
  );
};

export default Login;
