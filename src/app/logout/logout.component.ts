import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
constructor(private router:Router){
 this.router.navigate(['login']);
}
}
