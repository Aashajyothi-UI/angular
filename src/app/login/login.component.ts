import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { GoogleApiService, UserInfo } from '../google-api.service';
import { lastValueFrom } from 'rxjs';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { FacebookLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  submitted!: boolean;
  users: any;
  mailSnippets: string[] = []
  userInfo?: UserInfo
  emaillist!: boolean;
  isGooglEmail: boolean = false;
  user!: SocialUser;
  loggedIn!: boolean;

  constructor(private formBuilder: FormBuilder, private commonserv: CommonService, private router: Router, private readonly googleApi: GoogleApiService,private authService: SocialAuthService) {

  

    googleApi.userProfileSubject.subscribe(info => {
      this.userInfo = info
    })
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

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }
  

  googleLogin() {
    this.googleApi.googleLogin();
  }


  get f() {
    return this.loginForm.controls;
  }

  login(data: any) {
    this.submitted = true;
    if (data.email) {
      let userFind = this.users.find((item: any) => item.email === data.email && item.password === data.password);
      if (userFind && Object.values(userFind).length > 0) {
        alert("user is valid");
        localStorage.setItem("isLoggedIn", "true");
        this.router.navigate(['home']);
      } else {
        alert("user is invalid");
      }

      if (this.loginForm.invalid) {
        return;
      }

    }
  }

  isLoggedIn(): boolean {
    return this.googleApi.isLoggedIn()
  }

  logout() {
    this.googleApi.signOut()
  }

  async getEmails() {

    if (!this.userInfo) {
      return;
    }

    const userId = this.userInfo?.info.sub as string
    const messages = await lastValueFrom(this.googleApi.emails(userId))
    messages.messages.forEach((element: any) => {
      const mail = lastValueFrom(this.googleApi.getMail(userId, element.id))
      mail.then(mail => {
        this.mailSnippets.push(mail.snippet)
      })
    });
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}


