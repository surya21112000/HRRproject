import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private service:AuthService,private https:HttpService,private http:HttpClient) { }
display:any
accCre:any
validation:any
post:any
  ngOnInit(): void {
    this.accCre=this.https.getAcc()
    // console.log(this.accCre);

    this.http.get("/api/admins").subscribe(res=>{
this.validation=res;



for(this.post in this.validation){
  console.log((this.validation[0].email));
  
}
    })
    
  this.display=  this.service.getAdmin()
  // this.display=this.service.getEmployee()


  }

}
