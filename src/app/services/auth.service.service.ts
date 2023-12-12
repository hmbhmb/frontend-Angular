import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public router:Router, private http: HttpClient) { }

  private url = 'http://127.0.0.1/'

  signup(user: any){
    return this.http.post(this.url + 'signup' , user)
  }
  login(user: any){
    return this.http.post(this.url + 'login' , user)
  }
  logout(){
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  isUser(){
    let tokenS = sessionStorage.getItem('token')
    let tokenL = localStorage.getItem('token')
    if (tokenS) {
      return true;
    } else if(tokenL) {
      sessionStorage.setItem('token',tokenL)
      return true;
    } else {
    return false;
    }
  }
  dataToken(){
    let token = sessionStorage.getItem('token')
    if(token){
      return JSON.parse(atob(token.split('.')[1]))
    }
  }
}

