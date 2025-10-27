import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ loggedIn }) => {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <NavLink className="text-white text-2xl font-bold" to="/">EM Service</NavLink>
          </div>
          <div className="flex items-center space-x-4">
            <NavLink className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700 hover:text-white transition-colors duration-300" to="/">Home</NavLink>
            <NavLink className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700 hover:text-white transition-colors duration-300" to="/about">About</NavLink> {/* Add About link */}
            {loggedIn && <NavLink className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700 hover:text-white transition-colors duration-300" to="/profile">Profile</NavLink>}
            {loggedIn ? (
              <NavLink className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700 hover:text-white transition-colors duration-300" to="/logout">Logout</NavLink>
            ) : (
              <NavLink className="px-3 py-2 text-gray-300 rounded hover:bg-gray-700 hover:text-white transition-colors duration-300" to="/login">Login</NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
