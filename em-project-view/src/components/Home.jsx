import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-transparent">
      {/* Hero Section */}
      <div className="py-20 text-center text-white">
        <h1 className="text-5xl font-extrabold">Employee Management, Simplified</h1>
        <p className="mt-4 text-lg text-indigo-200">Your all-in-one solution for managing employee data with ease and efficiency.</p>
        <NavLink 
          to="/employees"
          className="inline-block px-8 py-3 mt-8 font-semibold text-indigo-600 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300"
        >
          Get Started
        </NavLink>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-transparent">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-white">Key Features</h2>
          <p className="mt-4 text-lg text-indigo-200">Everything you need to manage your team effectively.</p>
          <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-3">
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-indigo-500 rounded-full">
                {/* Heroicon: outline/view-list */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Employee Listing</h3>
              <p className="mt-2 text-indigo-200">View a comprehensive list of all your employees in one place.</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-indigo-500 rounded-full">
                {/* Heroicon: outline/plus */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Add & Update</h3>
              <p className="mt-2 text-indigo-200">Easily add new employees and keep their information up to date.</p>
            </div>
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-indigo-500 rounded-full">
                {/* Heroicon: outline/search */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">Search & Filter</h3>
              <p className="mt-2 text-indigo-200">Quickly find the employees you are looking for with our powerful search.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
