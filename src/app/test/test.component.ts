import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

   id:number;
   name:string;
   age:number;
   address: any;
   hobbies: any;
   constructor(){
    this.id=101;
    this.name="Vamshi";
    this.age=22;
    this.address={streetNo:101,city:"Hyd",state:"Telangana"};
    this.hobbies=["playing games","Television","Drawing","Painting"];
   }

  ngOnInit() {
    
  }

}
