import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-show-emp-by-id',
  templateUrl: './show-emp-by-id.component.html',
  styleUrls: ['./show-emp-by-id.component.css']
})
export class ShowEmpByIdComponent implements OnInit{
  empId: any;
  employee: any;
  // employees: any;
  emailId: any;
  //Date Of Join: MM/dd/yyyy

  constructor(private service:EmpService) {
     //Fetching EmailId from LocalStorage
     this.emailId = localStorage.getItem("emailId");
    // this.employees = [
    //   {empId: 101, empName:'Harsha', salary:1212.12, gender:'Male',   doj:'05/20/2018', country:'IND', emailId:'harsha@gmail.com', password:'123'},
    //   {empId: 102, empName:'Pasha',  salary:2121.21, gender:'Male',   doj:'06/21/2017', country:'KEN', emailId:'pasha@gmail.com',  password:'123'},
    //   {empId: 103, empName:'Indira', salary:3232.32, gender:'Female', doj:'07/22/2016', country:'USA', emailId:'indira@gmail.com', password:'123'},
    //   {empId: 104, empName:'Venkat', salary:4545.45, gender:'Male',   doj:'08/23/2015', country:'AUS', emailId:'venkat@gmail.com', password:'123'},
    //   {empId: 105, empName:'Gopi',   salary:5656.56, gender:'Male',   doj:'09/24/2014', country:'PAK', emailId:'gopi@gmail.com',   password:'123'}
    // ];
  }

  ngOnInit() {
  }

  getEmployee() {
    
    this.employee = null;

    this.service.getEmpById(this.empId).subscribe((data: any) => {
      this.employee = data;
      console.log(data);
    });
    
  }
}
