import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { passwordValidator } from './validators/password.validator';
import { passwordMatchValidator } from './validators/passwordMatch.validator';
import { Router } from '@angular/router';
import {ServerHService} from '../../services/server-h.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //errorMatcher = new CrossFieldErrorMatcher();
  signUpForm!: FormGroup;
  wrongValues = false;

  constructor(private fb: FormBuilder, private router:Router, private serverH: ServerHService) { }
  
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstname: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      username: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["", [Validators.required, passwordValidator(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
      cpassword: ["", [Validators.required]],
      role: ["", [Validators.required]]
    }, {
      // cross-field validation
      validator: passwordMatchValidator
    })
  }
  passwordValidator(form: FormGroup) {
    const condition = form.get('password')?.value !== form.get('cpassword')?.value;

    return condition ? { passwordsDoNotMatch: true} : null;
  }
  get userName(){
    return this.signUpForm.get('username')
  }
  get email(){
    return this.signUpForm.get('email')
  }
  get password(){
    return this.signUpForm.get('password')
  }
  get cpassword(){
    return this.signUpForm.get('cpassword')
  }

  onSubmit(){
    if (!this.signUpForm.valid) {
      this.wrongValues = false;
      return;
    }

    this.serverH.createUser(this.signUpForm.value).subscribe((result: any) => {
      if (result.message == 'this username already exists') {
        this.wrongValues = true;
      } else {
        this.wrongValues = false;
        console.log(result);
        //
        window.alert("User has been registered! \nPlease log in to continue!");
        this.router.navigate(['login']);
        //window.location.reload();

        this.signUpForm.reset();
        //this.router.navigate(["/login"]);


      }
    });
  }
}
