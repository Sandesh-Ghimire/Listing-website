import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/logout', {
        method: 'POST',
        credentials: 'include', // Ensure cookies (for sessions) are sent
      });

      if (response.ok) {
        // Handle successful logout (e.g., redirect to login)
        console.log('Logged out successfully');
        navigate('/login');
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
    >
      Logout
    </button>
  );
};

export default Logout;
