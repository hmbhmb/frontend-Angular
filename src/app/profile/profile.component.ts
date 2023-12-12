import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( public router:Router ,public at:AuthServiceService  ){}
  token = sessionStorage.getItem('token')

  ngOnInit():void{
    if (!this.at.isUser()){
      this.router.navigate(['']);
    }
  }

}
