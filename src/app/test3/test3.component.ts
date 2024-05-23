import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit{
  
  emp:any;
  employees:any;

  //Date Of Join: MM/dd/yyyy
//Dependency injection for EmpService, Router
  constructor( private service:EmpService ,private router:Router) {
    // this.employees = [
    //   {empId: 101, empName:'Harsha', salary:1212.12, gender:'Male',   doj:'05/20/2018', country:'IND', emailId:'harsha@gmail.com', password:'123'},
    //   {empId: 102, empName:'Pasha',  salary:2121.21, gender:'Male',   doj:'06/21/2017', country:'KEN', emailId:'pasha@gmail.com',  password:'123'},
    //   {empId: 103, empName:'Indira', salary:3232.32, gender:'Female', doj:'07/22/2016', country:'USA', emailId:'indira@gmail.com', password:'123'},
    //   {empId: 104, empName:'Venkat', salary:4545.45, gender:'Male',   doj:'08/23/2015', country:'AUS', emailId:'venkat@gmail.com', password:'123'},
    //   {empId: 105, empName:'Gopi',   salary:5656.56, gender:'Male',   doj:'09/24/2014', country:'PAK', emailId:'gopi@gmail.com',   password:'123'}
    // ];
  }

  ngOnInit() {
    this.service.getAllEmployees().subscribe((data:any)=>{
      this.employees=data;
      console.log(data);
     });
  }

  // submit() {
  //   this.employee=null;
  //   this.employees.forEach((emp: any) => {
  //     if ((emp.emailId == this.emailId)&&(emp.password==this.password)) {
  //       this.employee = emp;
  //     }
  //   });
  //  if(this.employee!=null){
  //  alert("Login Success");
  //  }else{
  //   alert("Invalid Credentials");
  //  }
  // }

  loginSubmit(loginForm:any){
    console.log(loginForm);
    if(loginForm.emailId=="HR" && loginForm.password=="HR" ){
      this.service.setUserLogIn();
      this.router.navigate(['showemps']);
      
    }else{
      this.emp = null;
      
      this.employees.forEach((employee: any) => {
        if (loginForm.emailId == employee.emailId && loginForm.password == employee.password) {
          this.emp = employee;
        }
      });

      if (this.emp != null) {
        this.service.setUserLogIn();
        this.router.navigate(['showemps']);
      } else {
        alert("Invalid Credentials");
      }
    }
  }
}
