import { Component, OnInit, Input } from '@angular/core';
import {EmployeeService} from '../employee.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Employee} from '../employee.model';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
