import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.sass']
})
export class BindingComponent implements OnInit {

  
  fullname!: string;

  itemImageUrl="assets/peopleteck1.jpg";
  h1style: boolean=false;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onClick(){
  this.h1style =!this.h1style;
  this.route.navigate(['/navbar'])
  }
  @HostListener('unloaded')
  ngOnDestroy(): void {
    console.log('Items destroyed');
  }
}



