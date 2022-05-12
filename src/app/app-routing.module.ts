import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { GraphsComponent } from './graphs/graphs.component';
import { AuthGuard } from './auth.guard';
import { UserlistComponent } from './userlist/userlist.component';
import { UsereditComponent } from './useredit/useredit.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { CreateempComponent } from './createemp/createemp.component';
import { EmpeditComponent } from './empedit/empedit.component';
import { BindingComponent } from './binding/binding.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: 'binding', component: BindingComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'userlist', component: UserlistComponent },
  { path: 'emplist', component: EmployeelistComponent },
  { path: 'createmp', component: CreateempComponent },
  { path: 'editemp/:id', component: EmpeditComponent },
  { path:'edituser/:id', component: UsereditComponent },
  { path: 'about', component: AboutComponent,canActivate:[AuthGuard] },
  { path: 'contact', component: ContactComponent,canActivate:[AuthGuard] },
  { path: 'graphs', component: GraphsComponent,canActivate:[AuthGuard] },
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard],
},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
