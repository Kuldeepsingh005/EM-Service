import React from 'react';

const About = () => {
  return (
    <div className="bg-transparent py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            How Our EM Service Helps You Manage Your Team
          </h1>
          <p className="mt-4 text-xl text-indigo-200">
            Our Employee Management (EM) Service is a powerful, intuitive platform designed to streamline your HR processes, giving you more time to focus on what matters most: your people.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Feature 1: Centralized Database */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-indigo-500 rounded-full">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M2 7l10 5 10-5"></path></svg>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white text-center">Centralized Employee Database</h3>
            <p className="mt-4 text-indigo-200 text-center">
              Keep all employee information—from personal details to performance reviews—in one secure, easily accessible location. No more scattered files or outdated spreadsheets.
            </p>
          </div>

          {/* Feature 2: Easy Onboarding & Offboarding */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-green-500 rounded-full">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white text-center">Easy Onboarding & Offboarding</h3>
            <p className="mt-4 text-indigo-200 text-center">
              Simplify the process of welcoming new hires and managing departures. Our streamlined workflows ensure a smooth transition for everyone involved.
            </p>
          </div>

          {/* Feature 3: Performance Management */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-blue-500 rounded-full">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white text-center">Performance Management</h3>
            <p className="mt-4 text-indigo-200 text-center">
              Track employee performance, set goals, and conduct reviews all within the platform. Empower your managers to lead their teams more effectively.
            </p>
          </div>

          {/* Feature 4: Reporting & Analytics */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-yellow-500 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white text-center">Reporting & Analytics</h3>
            <p className="mt-4 text-indigo-200 text-center">
              Gain valuable insights into your workforce with our powerful reporting tools. Make data-driven decisions to improve productivity and employee satisfaction.
            </p>
          </div>
          
          {/* Feature 5: Time & Attendance */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-red-500 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white text-center">Time & Attendance</h3>
            <p className="mt-4 text-indigo-200 text-center">
                Track employee hours, manage schedules, and approve time-off requests with ease. Ensure compliance and simplify your payroll process.
            </p>
          </div>

          {/* Feature 6: Secure & Compliant */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex items-center justify-center w-16 h-16 mx-auto text-white bg-purple-500 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 018.618-3.04 11.955 11.955 0 018.618 3.04 12.02 12.02 0 00-3.04-8.618z"></path></svg>
            </div>
            <h3 className="mt-6 text-2xl font-bold text-white text-center">Secure & Compliant</h3>
            <p className="mt-4 text-indigo-200 text-center">
                Rest easy knowing your employee data is protected with enterprise-grade security. Our platform helps you stay compliant with labor laws and regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;