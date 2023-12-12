import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth.service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  
  constructor(public router:Router,public at:AuthServiceService){}
  
  user ={
    username:'',
    firstname:'',
    lastname:'',
    email:'',
    password:'',
  }
  msg : any

  ngOnInit():void{
    if (this.at.isUser()){
      this.router.navigate(['/success']);
    }
  }
  signup(){
    // let formD = new FormData()
    // formD.append('username',this.user.username)
    // formD.append('firstname',this.user.firstname)
    // formD.append('lastname',this.user.lastname)
    // formD.append('email',this.user.email)
    // formD.append('password',this.user.password)    
    this.at.signup(this.user)
      .subscribe(
        ()=>{
          this.router.navigate(['/login'])
        },
        err=>{
          if(err.error.code == 11000){
            this.msg = "Email already existe !"
          }                 
        }
      )
  }
}
