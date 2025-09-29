import React, { useState } from 'react';

const Contact = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you, ${name}. Your message has been sent.`);
    setName(''); setEmail(''); setMessage('');
  };

  return (
    <>
      <div className="container mx-auto px-4 py-20 max-w-xl">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full p-3 border rounded"/>
          <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 border rounded"/>
          <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message" className="w-full p-3 border rounded h-32"/>
          <button type="submit" className="w-full py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition">Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
