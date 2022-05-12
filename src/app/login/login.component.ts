import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  submitted!: boolean;
  users: any;


  constructor(private formBuilder: FormBuilder, private commonserv: CommonService, private router: Router,) {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.
          pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ],],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {

    this.commonserv.getAllUsers().subscribe((data: any) => {
      this.users = data;
    })
  }
  get f() {
    return this.loginForm.controls;
  }

  login(data: any) {
    this.submitted = true;
    if (data.email) {
      // this.users.foreach((item:any)=>{
      //   if(item.email === data.email && item.password === data.password){
      //     alert("user is valid");
      //  localStorage.setItem("isLoggedIn","true");
      //   this.router.navigate(['home']);

      //   return;
      // }
      // else{
      //   alert("user is invalid");
      //   console.log("user is invalid");
      //   // localStorage.clear()
      // }
      // })
    
      let userFind = this.users.find((item: any) => item.email === data.email && item.password === data.password);
      if (userFind && Object.values(userFind).length > 0) {
        alert("user is valid");
        localStorage.setItem("isLoggedIn", "true");
        this.router.navigate(['home']);
      } else {
        alert("user is invalid");
      }
      //   for (let i of this.users) {
      //     if (i.email === data.email && i.password === data.password) {
      //       alert("user is valid");
      //       localStorage.setItem("isLoggedIn", "true");
      //       this.router.navigate(['home']);
      //       isSuccess = false;
      //       break;
      //     }
      //     else {
      //       isSuccess = true;

      //       alert("user is invalid");
      //       console.log("user is invalid");
      //     }
      //   }
      // }
      // if (isSuccess) {
      //   alert("user is invalid");
      // }
      if (this.loginForm.invalid) {
        return;
      }
      // if (this.loginForm.valid) {
      //   this.router.navigate(['home']);
      // }

    }
  }

}
