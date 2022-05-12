import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  @Input()
  msg!: string;
 @Input() Name='';
  constructor() {
    console.log("child constructor is called");
   }
  ngAfterViewChecked(): void {
    console.log("ViewChecked called")
  }
  ngAfterViewInit(): void {
    console.log("ViewInit called")
  }
  ngAfterContentChecked(): void {
    console.log("AfterContentCheked called")
  }
  ngAfterContentInit(): void {
   console.log("AfterContentInit called")
  }
  ngDoCheck(): void {
    console.log("child DoCheck is called");
  }
  ngOnInit() {
    console.log("child ngOnInit is called");
  console.log(this.msg);
  }

  ngOnDestroy(){
    console.log("child OnDestroy is called");
  }

  @Output() otpFromChild : EventEmitter<string> = new EventEmitter();
  name!: string;

  sendDataToParent(data:any) {
    console.log(data);
    this.otpFromChild.emit(this.name);
    }
    ngOnChanges(){
      console.log("child ngOnChanges is called");
    }

}


