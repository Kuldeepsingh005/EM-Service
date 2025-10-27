import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService.jsx';

const UpdateEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    if (!id) {
      console.error('No id provided for update');
      return;
    }
    EmployeeService.updateEmployee(employee, id)
      .then((response) => {
        console.log(response);
        navigate('/employees');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-800 rounded-lg shadow-lg max-w-2xl">
      <div className="max-w-lg mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Update Employee</h1>
        <form onSubmit={updateEmployee}>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-600"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-600"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-600"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => navigate('/employees')}
              className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;