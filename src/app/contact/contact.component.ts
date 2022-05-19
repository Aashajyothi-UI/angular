import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
inputtext:string='';
destroy:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(inputel:HTMLInputElement){
this.inputtext=inputel.value;

  }
  OnClick(){
this.destroy=!this.destroy
  }

}
