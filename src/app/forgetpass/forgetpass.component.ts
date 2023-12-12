import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth.service.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss']
})
export class ForgetpassComponent implements OnInit{

  constructor(public router:Router,private at:AuthServiceService){}
  
  ngOnInit():void{
    if (this.at.isUser()){
      this.router.navigate(['/success']);
    }
  }
  
}
