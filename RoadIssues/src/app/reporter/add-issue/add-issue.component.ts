import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerHService } from 'src/app/services/server-h.service';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {

  addIssueForm!: FormGroup;
  wrongValues = false;

  constructor(private fb: FormBuilder, private router:Router, private serverH: ServerHService) { }
  
  ngOnInit(): void {
    this.addIssueForm = this.fb.group({
      Description: ["", [Validators.required]],
      City: ["", [Validators.required]],
      Country: ["", [Validators.required]],
      streetAddress: ["", [Validators.required]]
    })
  }

  onSubmit(){
    // if (!this.addIssueForm.valid) {
    //   this.wrongValues = false;
    //   return;
    // }
    console.log("Dsdvfdsc");
    this.serverH.addIssue(this.addIssueForm.value).subscribe((result: any) => {
        console.log(result);
        //
        window.alert("Issue has been added!");
        this.router.navigate(['reporter']);
        //window.location.reload();

        this.addIssueForm.reset();
        //this.router.navigate(["/login"]);

    
      
    });
  }
}
