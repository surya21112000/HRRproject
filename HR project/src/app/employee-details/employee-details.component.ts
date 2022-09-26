import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private http:HttpClient) { }
viewProfile=false
post:any=[]
  ngOnInit(): void {
    this.getEmployeeDetails()
  }
  getEmployeeDetails(){
    this.http.get('https://hr-management-39a7f-default-rtdb.asia-southeast1.firebasedatabase.app/employeedetails.json').pipe(map((response:any)=>{
      let posts =[];
      for(let key  in response ){
        posts.push({...response[key],key});
      }
      return posts;
    })).subscribe(response=>{
      this.post=response
      console.log(this.post);

    })
  }

}
