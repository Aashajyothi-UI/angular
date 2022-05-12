import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit,OnDestroy {
  msging: any;
  ischild=false;
  name="";
  constructor() {
    console.log("parent constructor is called" )
   }

  ngOnInit(): void {
    console.log("parent ngOnInit is called")
  }
  message: string = 'Hi...have a nice day - message from parent';

  onsubmit(){
    
this.ischild=!this.ischild;
  }

  ngOnDestroy(){
    console.log("parent Destroy is called")
  }


  list= [
    {
      id:1,
      name:"angular",
      discription:"angular opensource typescript based webapp platform"
    },
    {
      id:2,
      name:"react",
      discription:"react opensource javascript library"
    }
  ];

  receiveChildData(data: any){
    console.log(data);
    this.msging= data;
    }

}
