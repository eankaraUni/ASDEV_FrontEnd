import { Component, OnInit } from '@angular/core';
import { ServerHService } from 'src/app/services/server-h.service';
@Component({
  selector: 'app-odashboard',
  templateUrl: './odashboard.component.html',
  styleUrls: ['./odashboard.component.css']
})
export class OdashboardComponent implements OnInit {
  issues: any[] =[];
  displayedColumns = ['Description', 'author','raportedDate', 'streetAddress', 'City', 'Country', 'status', 'solve'];

  constructor(public serverh: ServerHService) { }

  ngOnInit(): void {
    this.serverh.getAssignedIssues().subscribe(
      // data => console.log(data)
      posts => {
        console.log(posts);
        this.issues = posts as any;}
    );
  }
  
  solveIssue(id: string){
    window.alert("The Issue is solved!")
    console.log(id);
    this.serverh.solveIssue(id);
  }

}
