package com.management.ems.service.impl;

import com.management.ems.dto.EmployeeDto;
import com.management.ems.entity.Employee;
import com.management.ems.exception.ResourceNotFoundException;
import com.management.ems.mapper.EmployeeMapper;
import com.management.ems.repository.EmployeeRepository;
import com.management.ems.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.nio.file.ReadOnlyFileSystemException;

@Service
@AllArgsConstructor //injects employeeRepository as a dependency
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee with the given id: " + id + " does not exist."));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}
