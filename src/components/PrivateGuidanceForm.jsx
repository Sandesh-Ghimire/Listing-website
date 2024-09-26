import React, { useState } from 'react';

const PrivateGuidanceForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/request-guidance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Request sent successfully');
      } else {
        console.error('Failed to send request:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none" required />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none" required />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Send Request</button>
    </form>
  );
};

export default PrivateGuidanceForm;
