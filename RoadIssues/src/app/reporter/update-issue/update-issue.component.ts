import { Component, OnInit } from '@angular/core';
import { ServerHService } from 'src/app/services/server-h.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-issue',
  templateUrl: './update-issue.component.html',
  styleUrls: ['./update-issue.component.css']
})
export class UpdateIssueComponent implements OnInit {
  issue:any;
  addIssueForm!: FormGroup;
  id: String = "";
  constructor(private serverh:ServerHService, public router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.serverh.getIssue(params.id).subscribe(
        // data => console.log(data)
        posts => {
          console.log(posts);
          this.issue = posts as any;}
      );
    });
    
    // this.addIssueForm = this.fb.group({
    //   Description: ["", [Validators.required]],
    //   City: ["", [Validators.required]],
    //   Country: ["", [Validators.required]],
    //   streetAddress: ["", [Validators.required]]
    // })
  }
  onSubmit(){
    window.alert("The Issue was updated");
    console.log("sdnjfds");
  }


}
