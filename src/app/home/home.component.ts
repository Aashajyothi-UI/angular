import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router,private commnsrv:CommonService) { }

  ngOnInit(): void {
  }
  onclick(){
    localStorage.clear()
    this.router.navigate(['login'])
  }
}
