package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5174"})
@RestController
public class Empcontroller {

    private final EmployeeRepository employeeRepository;

    // List<Employee> employees= new ArrayList<>();
   //EmployeeService employeeService= new EmployeeServiceImpl();

    Empcontroller(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
     @Autowired
     EmployeeService employeeService;

    @GetMapping("employees")
    public List<Employee>getAllEmployees() {
        return employeeService.readEmployee();
    }

    @GetMapping("employees/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        System.out.println("coming");
        return  employeeService.readEmployee(id);
    }
    @PostMapping("employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }
    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable Long id){
        if(employeeService.deleteEmployee(id)) {
            return "Delete Successfully";
        } else {
            return "Not Found";
        }
    }
    @PutMapping("employees/{id}")
    public String updateEmployee(@PathVariable long id, @RequestBody Employee employee) {
        return employeeService.updateEmployee(id, employee);
    }
    
}
