import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
//For Modal Dialog Box
declare var jQuery: any;
@Component({
  selector: 'app-showemployees',
  templateUrl: './showemployees.component.html',
  styleUrls: ['./showemployees.component.css']
})
export class ShowemployeesComponent implements OnInit{
  employees:any;
  employee: any;    //Update Emp
  countries: any;
  departments: any;
  
   //Dependency Injection for EmpService
  constructor(private service:EmpService) {
    
  }
  ngOnInit(){
    this.service.getAllEmployees().subscribe((data:any)=>{
     this.employees=data;
     console.log(data);
    });
    //Update Emp Modal Dialog Box
    this.service.getCountries().subscribe((data: any) => {
      this.countries = data;
    });

    //Update Emp Modal Dialog Box
    this.service.getAllDepartments().subscribe((data: any) => {
      this.departments = data;
    });
  }
  
  editEmp(emp: any) {
    this.employee = emp;  
    jQuery('#empModel').modal('show');  //Update Emp Modal Dialog Box
  }
  updateEmp(){
    this.service.updateEmployee(this.employee).subscribe((data: any) => { 
      console.log(data); 
    });
  }
  deleteEmp(emp :any){
    //Delete the Employee Record form the Database
    this.service.deleteEmployee(emp.empId).subscribe((data:any)=>{
      console.log(data);
    });
   //Delete the Employee Record only in UI (HTML)
    const i = this.employees.findIndex((employee: any) => {
      return employee.empId == emp.empId;
    });
    this.employees.splice(i, 1);
  }
}
