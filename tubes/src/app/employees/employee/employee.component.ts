import { Component, OnInit } from '@angular/core';

import{EmployeeService}from '../employee/employee.service'
import { NgForm } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import { Employee } from '../employee/employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
selectedEmployee:Employee;

  constructor(private employeeService: EmployeeService, private tostr:ToastrService) { }

  ngOnInit() {
    this.employeeService.getData();
    this.resetForm();
  }

onSubmit(employeeForm: NgForm){
  if(employeeForm.value.$key == null)
  this.employeeService.insertEmployee(employeeForm.value);
   else
  this.employeeService.updateEmployee(employeeForm.value);
  this.resetForm(employeeForm);
  this.tostr.success('Submitted Succesfully', 'Schedule Register');

}
resetForm(employeeForm?: NgForm){
  if(employeeForm != null)
  employeeForm.reset();
  this.employeeService.selectedEmployee = {
    $key : null,
    name : '',
    position : '',
    office : '',
    salary : 0,
    imagePath:''
  }
  
}z

}
