import React from "react";
import logo from '../assets/react.svg';
import { NavLink } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";
import useTheme from '../hook/useTheme'; // Import the useTheme hook

const Navbar = ({}) => {
  // Access theme and toggleTheme function from the useTheme hook
  const [theme, toggleTheme] = useTheme();

  // Function to apply styling for active/inactive links
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <NavLink
            className="flex items-center justify-start"
            to="/"
          >
            <img className="h-10 w-auto" src={logo} alt="React Jobs" />
            <span className="hidden md:block text-white text-2xl font-bold ml-2">
              All Scholarships
            </span>
          </NavLink>

          {/* Nav Links and Dark Mode Toggle */}
          <div className="flex items-center space-x-4 md:ml-auto">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/scholarships" className={linkClass}>
              Scholarships
            </NavLink>
            <NavLink to="/login" className={linkClass}>
              Login
            </NavLink>
            <NavLink to="/register" className={linkClass}>
              Register
            </NavLink>
              <MdOutlineDarkMode className="ml-auto text-2xl cursor-pointer text-white hover:text-gray-300"  onClick={toggleTheme}/>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
