import { Injectable, } from '@angular/core';
import {AngularFireDatabase,AngularFireList}from'angularfire2/database'
import {Employee}from'../employee/employee.model';
import {EmployeeListService} from '../employee-list/employee-list.service';
import{Ingredient} from '../shared/ingredient.model'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employeeList: AngularFireList<any>;

selectedEmployee

employee:Employee[]=[
  new Employee('fhgff','ffufuy','ggfgf',667,
  // 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', 
  [
    new Ingredient('meal',1),
    new Ingredient('tomato', 2)
  ]),
  
];
  constructor(private firebase :AngularFireDatabase,private slsService: EmployeeListService) { }
  
getData(){
  this.employeeList = this.firebase.list('employees');
  return this.employeeList;
}
insertEmployee(employee:Employee)
{
  this.employeeList.push({
    name : employee.name,
    position : employee.position,
    office : employee.office,
    salary : employee.salary
  });
}
updateEmployee(employee:Employee){
  this.employeeList.update(employee.$key,
    {
      name : employee.name,
      position : employee.position,
      office: employee.office,
      salary : employee.salary
    });
  }
deleteEmployee($key:string){
  this.employeeList.remove($key);
}

}
