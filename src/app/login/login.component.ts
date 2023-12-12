import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private router:Router,public at:AuthServiceService){}
  
  user ={
    email:'',
    password:'',
  }
  token : any
  msg : any
  me : boolean = false
  ngOnInit():void{
    if (this.at.isUser()){
      this.router.navigate(['/success']);
    }  
  }
  login(){
    this.at.login(this.user)
    .subscribe(
      (res)=>{
        this.token = res;
        sessionStorage.setItem('token' , this.token.token)   
        if ( this.me ){
          localStorage.setItem('token' , this.token.token)
        }
        this.router.navigate(['/success'])
      },
      err=>{
        this.msg = err.error        
      }
    )
  }
}
