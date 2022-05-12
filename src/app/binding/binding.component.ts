import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.sass']
})
export class BindingComponent implements OnInit {

  
  fullname!: string;

  itemImageUrl="assets/peopleteck1.jpg";
  h1style: boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
  this.h1style =!this.h1style;
  }

}

