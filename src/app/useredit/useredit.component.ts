import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CommonService } from '../common.service';
import { User } from '../user';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.sass']
})
export class UsereditComponent implements OnInit {

  editform!: FormGroup;
  submitted = false;
  users = new Array<User>();

  userValue: any;
  id!: number;


  constructor(private formBuilder: FormBuilder, private activateroute: ActivatedRoute, private router: Router, private commonserv: CommonService,) {
    this.editform = this.formBuilder.group(
      {
        FirstName: ['', Validators.required],
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
        password: ['', Validators.required],
      })
  }

  ngOnInit(): void {
    this.id = this.activateroute.snapshot.params['id'];
    this.commonserv.getOneEmployee(this.id).subscribe(data => {
      this.users = data
      this.editform.setValue(data);
    }
    );

  }

  get f(): { [key: string]: AbstractControl } {
    return this.editform.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.editform.invalid) {
      return;
    }
    if (this.editform.valid) {
      alert("hello");
      this.commonserv.updateUser(this.id, this.editform.value).subscribe((user: User) => {
        console.log("=========================", user);
        this.router.navigate(['/userlist']);
      })
      this.editform.reset();
    }
  }

}

