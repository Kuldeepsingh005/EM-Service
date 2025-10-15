import axios from "axios";

// Use Vite env var so production builds can point to the deployed backend.
// Set VITE_API_BASE_URL in Vercel to e.g. "https://my-backend.example.com/employees"
const EMPLOYEE_S_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/employees";
 

class EmployeeService {
   saveEmployee(employee) {
      return axios.post(EMPLOYEE_S_API_BASE_URL, employee);
   }

   getEmployees() {
      return axios.get(EMPLOYEE_S_API_BASE_URL);
   }

   getEmployeeById(employeeId) {
      return axios.get(EMPLOYEE_S_API_BASE_URL + "/" + employeeId);
   }

   updateEmployee(employee, employeeId) {
      return axios.put(EMPLOYEE_S_API_BASE_URL + "/" + employeeId, employee);
   }

   deleteEmployee(employeeId) {
      return axios.delete(EMPLOYEE_S_API_BASE_URL + "/" + employeeId);
   }
}

export default new EmployeeService();