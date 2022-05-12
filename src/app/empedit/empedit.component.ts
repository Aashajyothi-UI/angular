import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.sass']
})
export class EmpeditComponent implements OnInit {
  editform!: FormGroup;
  submitted = false;
  // employees = new Array<Employee>();
  employees:any={};
  id!: string;
   _id!: string;


  constructor(private formBuilder: FormBuilder, private activateroute: ActivatedRoute, private router: Router, private commonserv: CommonService) { }

  ngOnInit(): void {
    this.editform = this.formBuilder.group(
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
      }),
      this._id = this.activateroute.snapshot.params['id'];
      this.commonserv.getOneEmp(this._id).subscribe(data => {
        this.employees = data
        this.editform.setValue(data);
      }
      );

  }
  get f(): { [key: string]: AbstractControl } {
    return this.editform.controls;
  }
  update() {
    this.submitted = true;

    if (this.editform.invalid) {
      return;
    }
    if (this.editform.valid) {
      const model = {
        name: this.editform.value.name,
        email: this.editform.value.email,
        mobile: this.editform.value.mobile.toString(),
      }
      this.commonserv.updateemp(this._id,model).subscribe((emp: Employee) => {
        console.log(this.editform.value.name);
        this.router.navigate(['emplist']);
      })
    }
  }

}
