import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.sass']
})
export class UserlistComponent implements OnInit {
users = new Array<User>();

  constructor(private userservice:CommonService , private formBuilder: FormBuilder, private router: Router) {
    userservice.getAllUsers().subscribe((response: User[]) => {
      this.users = response.map(item => {
        return new User(
          item.id,
          item.FirstName,
          item.Mobile,
          item.email,
          item.password
        );
      });
    });
  }

  ngOnInit(): void {
    this.getAllUsers;
  }
  getAllUsers(): void {
    this.userservice.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log("usercreated", data);
    })
  }
  deleteEmployee(id: number) {
    this.userservice.deleteUser(id).subscribe(
      (data: any) => {
        console.log(data);
        this.getAllUsers();
      }
    )
  }
  showEdit(id: number) {
    this.router.navigate(['edituser/' + id]);
  }
}
