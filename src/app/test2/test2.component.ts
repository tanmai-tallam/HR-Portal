import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit{

  person: any;
  constructor() {
    this.person = {
      id:101,
      name:'Harsha',
      age:22,
      address:{streetNo:101, city:'Hyd', state:'Telangana'},
      hobbies:['Eating', 'Sleeping', 'Running', 'Swimming']
    }
  }
  ngOnInit() {
 
  }
  submit(){
    alert("Button clicked");
    alert(this.person.id);
  }

}
