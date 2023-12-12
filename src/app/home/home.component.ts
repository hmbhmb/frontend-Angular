import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(public router:Router,private at:AuthServiceService){}
  
  ngOnInit():void{
    if (this.at.isUser()){
      this.router.navigate(['/success']);
    }
  }

}
