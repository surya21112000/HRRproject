import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PortalComponent } from './portal/portal.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {HttpClientModule}  from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './employee-details/edit-employee/edit-employee.component';
import { Route, RouterModule } from '@angular/router';

const approutes:Route[]=[{

path:'employeeLists',component:EmployeeDetailsComponent,
},{
  path:'editEmployee',component:EditEmployeeComponent,
},
{
  path:'attendance',component:PortalComponent,
},
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortalComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
    
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }












