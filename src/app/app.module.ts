import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { RegistrationComponent } from './registration/registration.component';
import { PlotlyModule } from 'angular-plotly.js';

import * as PlotlyJS from 'plotly.js-dist-min';
import { GraphsComponent } from './graphs/graphs.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UsereditComponent } from './useredit/useredit.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { CreateempComponent } from './createemp/createemp.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { BindingComponent } from './binding/binding.component';
import { HeaderComponent } from './header/header.component';
import { DemoComponent } from './demo/demo.component';
import { LifecyclehookComponent } from './lifecyclehook/lifecyclehook.component';
import { YoutubeComponent } from './youtube/youtube.component';
import{MatButtonModule}  from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { OAuthModule } from 'angular-oauth2-oidc';
import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    RegistrationComponent,
    GraphsComponent,
    UserlistComponent,
    UsereditComponent,
    EmployeelistComponent,
    CreateempComponent,
    EmpeditComponent,
    ParentComponent,
    ChildComponent,
    BindingComponent,
    HeaderComponent,
    DemoComponent,
    LifecyclehookComponent,
    YoutubeComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    PlotlyModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    SocialLoginModule,
    OAuthModule.forRoot()
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
            {
              id: FacebookLoginProvider.PROVIDER_ID,
              provider: new FacebookLoginProvider('561602290896109')
            }],
            onError: (err) => {
              console.error(err);
            }
          } as SocialAuthServiceConfig,
        }
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
