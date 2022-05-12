import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-createemp',
  templateUrl: './createemp.component.html',
  styleUrls: ['./createemp.component.sass']
})
export class CreateempComponent implements OnInit {
  empform!: FormGroup;
  submitted = false;
  employees = new Array<Employee>();


  constructor(private formBuilder: FormBuilder, private router: Router, private commonserv: CommonService) { }

  ngOnInit(): void {
    this.empform = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$")]],
        email: ['', [
          Validators.required,
          Validators.email,
          Validators.
            pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ],],
        mobile: ['', [
          Validators.required,
          Validators.maxLength(10),
          // Validators.toString(),
          Validators.pattern('[6-9]\\d{9}'),
        ],],
      })

  }
  get f(): { [key: string]: AbstractControl } {
    return this.empform.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.empform.invalid) {
      return;
    }
    if (this.empform.valid) {
      const model = {
        name: this.empform.value.name,
        email: this.empform.value.email,
        mobile: this.empform.value.mobile.toString(),
      }
      this.commonserv.postEmployee(model).subscribe((emp: Employee) => {
        console.log("usercreated", emp);
        this.employees.push(emp);
        console.log(this.empform.value.name);
        this.router.navigate(['emplist']);
      })
    }
  }
}
