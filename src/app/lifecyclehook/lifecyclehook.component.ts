import { Component, Input, OnInit,OnChanges, SimpleChanges, AfterContentInit, DoCheck, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lifecyclehook',
  templateUrl: './lifecyclehook.component.html',
  styleUrls: ['./lifecyclehook.component.sass']
})
export class LifecyclehookComponent implements OnInit,OnChanges,AfterContentInit,DoCheck,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  inputtext:string='';
  constructor( private router:Router ) {
    console.log(" contructor is called first");
    // console.log(this.value);
   }
ngOnChanges(change:SimpleChanges){
  console.log(" onchanges is called");
  console.log(change);
  
}
  ngOnInit(): void {
    console.log(" OnInit is called first");
    // console.log(this.value);
    
  }
  ngDoCheck(){
    console.log(" docheck is called");
    }
  ngAfterContentInit(){
    console.log(" AfterContentInit is called");
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
  onsubmit(inputel:HTMLInputElement){
    this.inputtext=inputel.value;
    console.log(this.inputtext);
    
    // this.router.navigate(['emplist']);
    }

}
