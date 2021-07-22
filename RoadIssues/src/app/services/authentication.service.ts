import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) { }
  private isAdmin = false;
  private isReporter = false;
  private isOperator = false;
  isLoggedin = false;
  storeUser(username: string, token: string, role: string) {
    localStorage.setItem("username", username);
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    //console.log(localStorage.getItem('isAuthenticated'));
    localStorage.setItem("isLogged", "true");
    if (role === 'A') {
      this.router.navigate(['admin']);
      this.isAdmin = true;
      this.isLoggedin = true;
    };
    if (role === 'R') {
      this.router.navigate(['reporter']);
      this.isReporter=true;
      this.isLoggedin = true;
    };
    if (role === 'O') {
      this.router.navigate(['operator']);
      this.isOperator = true;
      this.isLoggedin = true;
    };
  }
  getUser(){
    return localStorage.getItem('username');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  getRole(){
    return localStorage.getItem('role');
  }
  getOperator (){
    return this.isOperator;
  }
  getReporter(){
    return this.isReporter;
  }
  getAdmin(){
    return this.isAdmin;
  }
  isLoggedIn(){
    if(!!localStorage.getItem('isLogged')){
      this.isLoggedin = false;
      return false;
    }
    else{
      this.isLoggedin = true;
      return true;
    }

  }

  logout(){
    localStorage.clear();
    this.isLoggedin = false;
    this.isAdmin = false;
    this.isReporter = false;
    this.isOperator = false;
  }
}
