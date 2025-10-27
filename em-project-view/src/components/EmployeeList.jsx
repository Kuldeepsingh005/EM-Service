import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import EmployeeService from '../service/EmployeeService.jsx';

const EmployeeList = () => {
  const [loading,setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployees();
        setEmployees(response.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id)
      .then(() => {
        setEmployees((prev) => prev.filter((emp) => emp.id !== id));
      })
      .catch((err) => console.log(err));
  };

  const editEmployee = (id) => {
    navigate(`/editEmployee/${id}`);
  };

  const navigate = useNavigate();

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto my-8 p-8 bg-gray-800 rounded-lg shadow-lg max-w-7xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Employee Directory</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search employees..."
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-700 text-white placeholder-gray-400 border-gray-600"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            onClick={() => navigate('/addEmployee')}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
          >
            Add Employee
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : (
        <div className="shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead className="bg-gray-700 text-gray-300 uppercase text-sm">
              <tr>
                <th className="px-5 py-3 border-b-2 border-gray-600 text-left">Name</th>
                <th className="px-5 py-3 border-b-2 border-gray-600 text-left">Phone</th>
                <th className="px-5 py-3 border-b-2 border-gray-600 text-left">Email</th>
                <th className="px-5 py-3 border-b-2 border-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 text-gray-300">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-700">
                  <td className="px-5 py-5 border-b border-gray-600">{employee.name}</td>
                  <td className="px-5 py-5 border-b border-gray-600">{employee.phone}</td>
                  <td className="px-5 py-5 border-b border-gray-600">{employee.email}</td>
                  <td className="px-5 py-5 border-b border-gray-600 text-right">
                    <button
                      onClick={() => editEmployee(employee.id)}
                      className="text-indigo-400 hover:text-indigo-300 font-semibold mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteEmployee(employee.id)}
                      className="text-red-500 hover:text-red-700 font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;