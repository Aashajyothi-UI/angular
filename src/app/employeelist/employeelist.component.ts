import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.sass']
})
export class EmployeelistComponent implements OnInit {
  employees = new Array<Employee>();

  constructor(private userservice:CommonService , private formBuilder: FormBuilder, private router: Router) {
    userservice.getAllEmployees().subscribe((response: Employee[]) => {
      this.employees = response.map(item => {
        return new Employee(
          item._id,
          item.name,
          item.mobile,
          item.email
       );
      });
    });
  }

  ngOnInit(): void {
    this.getAllemployes;
  }
  getAllemployes(): void {
    this.userservice.getAllEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log("usercreated", data);
    })
  }
  deleteEmployee(_id: string) {
    this.userservice.deleteemp(_id).subscribe(
      (data: any) => {
        console.log(data);
        this.getAllemployes();
      }
    )
  }
  showEdit(_id: string) {
    this.router.navigate(['editemp/' + _id]);
  }
}

