import { Component, OnInit } from '@angular/core';
import{EmployeeService}from '../employee/employee.service';
import {Employee} from '../employee/employee.model'
// import { element } from '@angular/core/src/render3/instructions';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: Employee[];
  constructor(private employeeService: EmployeeService,private tostr:ToastrService) { }

  ngOnInit() {

    var x = this.employeeService.getData();
    x.snapshotChanges().subscribe(item => {
      this.employeeList=[];
      item.forEach(element=>{
        var y = element.payload.toJSON();
        y['$key']= element.key;
        this.employeeList.push(y as Employee);
       });
    }); 
  }
   onEdit(emp: Employee){
     this.employeeService.selectedEmployee = Object.assign({},emp);
   }
   onDelete(key :string){
     if(confirm ('Are you sure to delete this record?') == true)
     this.employeeService.deleteEmployee(key);
     this.tostr.warning("Deleted Succesfully, Schedule Register")
   }
}
