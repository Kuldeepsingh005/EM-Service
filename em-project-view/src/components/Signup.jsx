import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
 

const Signup = () => {
  const [userInfo, setUserInfo] = useState({ name: '', email: '', password: ''});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    UserService.saveUser(userInfo).then((response) => {
        console.log(response);
        navigate('/login');
    }).catch((error) => {
        console.log(error);
    })
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-800 rounded-lg shadow-lg transform transition-all hover:scale-105">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white">
            Create Your Account
          </h1>
          <p className="mt-2 text-sm text-indigo-200">
            Join us and start managing your employees with ease
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="relative block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={userInfo.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={userInfo.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="relative block w-full px-3 py-2 text-white placeholder-gray-400 bg-gray-700 border border-gray-600 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={userInfo.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms-and-conditions"
                name="terms-and-conditions"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-600 rounded focus:ring-indigo-500 bg-gray-700"
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="terms-and-conditions"
                className="font-medium text-gray-300"
              >
                I agree to the
                <a href="#" className="ml-1 text-indigo-400 hover:text-indigo-300">
                  Terms of Service
                </a>
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </div>
        </form>
        <p className="mt-2 text-sm text-center text-gray-400">
          {"Already have an account? "}
          <a href="/login" className="font-medium text-indigo-400 hover:text-indigo-300">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
