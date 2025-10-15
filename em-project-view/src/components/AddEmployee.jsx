import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../service/EmployeeService'
 
const AddEmployee = () => {
  const[employee,setEmployee]=useState({
    id:"",
    name:"",
    phone:"",
    email:""
});
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setEmployee({...employee,[name]:value})};


    const saveEmployee=(e)=>{
      e.preventDefault();
      EmployeeService.saveEmployee(employee)
      .then(()=>{
        // navigate back to list so the newly saved employee can be shown
        Navigate('/');
      })
      .catch((error)=>{
        console.log(error)
      })
    }

    const reset=(e)=>{
      e.preventDefault();
      setEmployee({
        id:"",
        name:"",
        phone:"",
        email:"",
      });
    }
  const Navigate=useNavigate();
  return (
    <div className="max-w-xl mx-40 bg-slate-500 my-20 rounded shadow py-4 px-8">
      <div className="text-4xl tracking-wider font-semibold text-white-900 text-center py-4 px-8"> 
        <p>Add🧑‍💻Employee</p>
        </div>
        <div className="mx-10 my-2"> 
        <input name="name" value={employee.name}
        onChange={(e)=>handleChange(e)}
        className="w-full py-2 my-4 text-white-800" placeholder='Name' type="text" />
        <input name="phone" value={employee.phone}
        onChange={(e)=>handleChange(e)}
         className="w-full py-2 my-4 text-white-800" placeholder='Phone' type="number" />
        <input name="email"  value={employee.email}
        onChange={(e)=>handleChange(e)}
        className="w-full py-2 my-4 text-white-800" placeholder='Email' type="email" />
        </div>
        <div className="flex my-4 space-x-4 px-20"> 
  
         <button 
         onClick={saveEmployee}
         className="bg-green-800 hover:bg-blue-600 py-2 px-6 rounded">Save</button>
         <button
         onClick={reset}
         className="bg-red-800 hover:bg-blue-600 py-2 px-6 rounded">Clear</button>
         <button 
         onClick={()=>Navigate("/")}
         className="bg-orange-800 hover:bg-blue-600 py-2 px-6 rounded">Cancel</button>
         </div>
    </div>
  )
}


export default AddEmployee;