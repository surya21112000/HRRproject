import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-leavereq',
  templateUrl: './leavereq.component.html',
  styleUrls: ['./leavereq.component.css']
})
export class LeavereqComponent implements OnInit {
[x: string]: any;
  isShown:boolean |any
form=false
  constructor(private http:HttpClient,private https:HttpService) { }
post:any[]=[]
 accCre: any;
 verify:any;
 FinalAcc:any;
 ss='ss'
 postss:any
 postaa:any
 postForm:FormGroup | any
  ngOnInit(): void {
this.postForm = new FormGroup({
  leavetype: new FormControl(null,Validators.required),
  reason: new FormControl(null,Validators.required),
  firstdate: new FormControl(null,Validators.required),
  seconddate: new FormControl(null,Validators.required)
}),
this.http.get('/api/leave').subscribe(res=>{

this.postss= res
console.log(this.postss);
console.log(this.postss[0].reason);
for(let post of this.postss){
  if(post.email=this.accCre){
    this.postaa=post
    console.log("SUccccccc");
    console.log(this.postaa);
    
    
    
  }
  
}


console.log(this.postss.email);
// console.log(this.accCre);




})
 













this.accCre=this.https.getAcc()
this.http.get('api/employeeDetails').subscribe(response=>{
  this.verify=response
  
  
for(let post of this.verify){

if(post.email==this.accCre){
  this.FinalAcc=post
  console.log(this.FinalAcc);
  
}
  
}
  console.log(this.verify[4].email);

  
})





  }
  forms=true
openForm(){
this.form=true
this.http.post('/api/slkf',this.form)
}
closeForm(){
  this.form=false

}
fdate:Date|any
sdate:Date|any
funct(e: any){
  this.fdate=e.target.value;

  

  
}
f:any
dis=false

Funct(e: any){
  this.sdate=e.target.value;
console.log(this.fdate);
var date = new Date(this.fdate).getTime()
var date1 = new Date(this.sdate).getTime()
  this.f =(date1-date)/86400000
// console.log(date);
// console.log(date1);
console.log(this.f);

// alert("Total no of Days"+this.f);



}
selected:any
  posts ={ totaldays:""}
  nam='surya'
  posta:any
  
sub(){
  console.log(this.posts);
  this.posts.totaldays= this.f
  this.dis= true
  // console.log(this.postForm.value);
  this.forms=false
  this.form=false
  let c = {...this.postForm.value,...this.posts}
  console.log(c);

  
  console.log(this.selected.options[this.selected.selectedIndex].text);
  
  
}
unSub(){
  this.dis=false

}
acc={email:"",totaldays:""}

onSub(){
  console.log("YES");
  this.acc.totaldays=this.f
  this.acc.email=this.FinalAcc.email
  this.posta={...this.postForm.value,...this.acc}
  // this.http.post('/api/')
this.http.post('/api/leave',this.posta).subscribe(res=>{
  console.log(res);
  
})
}
  
}
  




