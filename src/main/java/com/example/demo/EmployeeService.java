package com.example.demo;

import java.util.List;

public interface EmployeeService {
    Employee createEmployee(Employee employee);
    List<Employee>readEmployee();
    boolean deleteEmployee(Long id);
    String updateEmployee(Long Id,Employee employee);
    Employee readEmployee(Long id);
}
