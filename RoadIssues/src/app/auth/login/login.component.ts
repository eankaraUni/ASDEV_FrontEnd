import { Component, OnInit } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import {ServerHService} from '../../services/server-h.service';
import { SignInData } from 'src/app/model/beforeLogin';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  loading = false;
  loginInvalid = false;
  incorrectvalues = false;

  error: any;
  
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(    private router:Router,
    private route: ActivatedRoute,
    private serverH: ServerHService,
    private authS: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.loading =true;
    const signInData = new SignInData(
      this.form.value.username,
      this.form.value.password
    );
    //console.log(signInData);
    if (!this.form.valid) {
      this.loginInvalid = true;
      this.incorrectvalues = false;
      this.loading=false;
      //window.alert("You should complete the fields");
      console.log('invalid');
      return;

    }
    this.checkCredentials(signInData);
  }

  private checkCredentials(a: SignInData) {

    this.serverH.signin(a).subscribe((result: any) => {
      this.incorrectvalues = false;
      console.log(result);
      this.authS.storeUser(result.user.username, result.token, result.user.role);
      //this.router.navigate(['home']);
    },(err:HttpErrorResponse)=>{
      console.log(err.error.text);
      this.loading = false;
      window.alert(err.error.text);
    });

  }
}
