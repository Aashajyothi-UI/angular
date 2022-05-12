import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {
  [x: string]: any;

  registerform!: FormGroup;
  submitted = false;
  users = new Array<User>();
  

  constructor(private formBuilder: FormBuilder, private router: Router, private commonserv: CommonService) { }


  ngOnInit(): void {
    this.registerform = this.formBuilder.group(
      {
        FirstName: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(15),Validators.pattern("^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$")]],
        email: ['', [
          Validators.required,
          Validators.email,
          Validators.
            pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ],],
        Mobile: ['', [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('[6-9]\\d{9}'),
        ],],
        city: ['', Validators.required],
        gender: ['', Validators.required],
        Technologies: ['', Validators.required],
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30)])],
        repassword: ['', Validators.required]
      },
      {
        validators: this.MustMatch('password', 'repassword')
      }
    );
  }

  checkCheckBoxvalue(event: any) {
    console.log(event, event.target.checked, event.target.value)
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerform.controls;
  }
  MustMatch(ControlName: string, matchingControlName: string) {
    return (FormGroup: FormGroup) => {
      const control = FormGroup.controls[ControlName];
      const MatchingControl = FormGroup.controls[matchingControlName];
      if (MatchingControl.errors && !MatchingControl.errors['MustMatch']) {
        return
      }
      if (control.value !== MatchingControl.value) {
        MatchingControl.setErrors({ MustMatch: true });
      }
      else {
        MatchingControl.setErrors(null);
      }
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerform.invalid) {
      return;
    }
    if (this.registerform.valid) {
      this.commonserv.postUser(this.registerform.value).subscribe((user: User) => {
        console.log("usercreated", user);
        this.users.push(user);
        console.log(this.registerform.value.name);
        this.router.navigate(['login']);
      })
  }
  // this.registerform.reset();

  }
}
