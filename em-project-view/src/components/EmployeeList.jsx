import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import EmployeeService from '../service/EmployeeService'

const EmployeeList = () => {
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = React.useState([]);

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
    }

    fetchData();
  }, []);

const deleteEmployee = (id) =>{
  EmployeeService.deleteEmployee(id).then(()=>{
    setEmployees((prev) => prev.filter(emp => emp.id !== id));
  }).catch(err => console.log(err));
}


const editEmployee = (id) =>{
  Navigate(`/editEmployee/${id}`);
}

  const Navigate = useNavigate();
  return (
    <div className="container mx-auto my-8">
      <div>
        <button
          onClick={() => Navigate("/addEmployee")}
          className="bg-slate-600 hover:bg-blue-700 mx-40 my-12 font-semibold px-20 py-2">Add Employee</button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th className="px-6 py-3 uppercase tracking-wide">Name</th>
              <th className="px-6 py-3 uppercase tracking-wide">phone</th>
              <th className="px-6 py-3 uppercase tracking-wide">email</th>
              <th className="px-6 py-3 uppercase tracking-wide">Action</th>
            </tr>
          </thead>
          {!loading && (
       <tbody>
  {employees.map((employee, index) => (
    <tr
      key={employee?.id ?? index} // prefer id; index only if id missing
      className="bg-white-200 border-b border-slate-300 hover:text-blue-600"
    >
      <td className="text-left px-6 py-4 whitespace-nowrap">{employee.name}</td>
      <td className="text-left px-6 py-4 whitespace-nowrap">{employee.phone}</td>
      <td className="text-left px-6 py-4 whitespace-nowrap">{employee.email}</td>
      <td className="text-left px-6 py-4 whitespace-nowrap space-x-4">
        <button
          type="button"
          onClick={() => editEmployee(employee.id)}
          className="hover:text-red-600 cursor-pointer"
        >
          Edit📝
        </button>

        <button
          type="button"
          onClick={() => deleteEmployee(employee.id)}
          className="hover:text-red-600 cursor-pointer"
        >
          Delete🧺
        </button>
      </td>
    </tr>
  ))}
</tbody>

          )}
        </table>
      </div>
    </div>
  )
}

export default EmployeeList