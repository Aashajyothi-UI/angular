import { Component, Input, OnInit,OnChanges, SimpleChanges, AfterContentInit, DoCheck, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.sass']
})
export class DemoComponent implements OnInit,OnChanges,AfterContentInit,DoCheck,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

 @Input() value:string="procademy"
  constructor( ) {
    console.log("child contructor is called first");
    console.log(this.value);
   }
ngOnChanges(change:SimpleChanges){
  console.log("child onchanges is called");
  console.log(change);
  
}
  ngOnInit(): void {
    console.log("child OnInit is called first");
    // console.log(this.value);
    
  }
  ngDoCheck(){
    console.log("child docheck is called");
    }
  ngAfterContentInit(){
    console.log("child AfterContentInit is called");
  }
  ngAfterContentChecked(){
    console.log(" ngAfterContentChecked is called");
    }
  ngAfterViewInit(){
    console.log("ngAfterViewInit is called");
    }
    ngAfterViewChecked(){
      console.log("ngAfterViewChecked is called");
      }
      ngOnDestroy(){
        console.log("destroy is called");
        
      }
}
