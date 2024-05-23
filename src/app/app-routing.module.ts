import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test3Component } from './test3/test3.component';
import { RegisterComponent } from './register/register.component';
import { ShowemployeesComponent } from './showemployees/showemployees.component';
import { ShowEmpByIdComponent } from './show-emp-by-id/show-emp-by-id.component';
import { authGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:"", component:Test3Component},
  {path:"login", component:Test3Component},
  {path:"register", component:RegisterComponent},
  {path:"showemps", canActivate:[authGuard],component:ShowemployeesComponent},
  {path:"showempbyid",canActivate:[authGuard], component:ShowEmpByIdComponent},
  {path:"logout",canActivate:[authGuard], component:LogoutComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
