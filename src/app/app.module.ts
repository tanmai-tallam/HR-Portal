import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ShowemployeesComponent } from './showemployees/showemployees.component';
import { ShowEmpByIdComponent } from './show-emp-by-id/show-emp-by-id.component';
import { ExpPipe } from './exp.pipe';
import { GenderPipe } from './gender.pipe';
import { HeaderComponent } from './header/header.component';
import { Router, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    Test3Component,
    RegisterComponent,
    ShowemployeesComponent,
    ShowEmpByIdComponent,
    ExpPipe,
    GenderPipe,
    HeaderComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
