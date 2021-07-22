import { Component, OnInit } from '@angular/core';
import { ServerHService } from 'src/app/services/server-h.service';
@Component({
  selector: 'app-rdashboard',
  templateUrl: './rdashboard.component.html',
  styleUrls: ['./rdashboard.component.css']
})
export class RdashboardComponent implements OnInit {
  issues: any[] =[];
  displayedColumns = ['Description', 'assignedUser','raportedDate', 'streetAddress', 'City', 'Country'];
  tab:number | undefined;
  constructor(public serverh: ServerHService) { }

  ngOnInit(): void {
    this.serverh.getWrittenIssues().subscribe(
      // data => console.log(data)
      posts => {
        console.log(posts);
        this.issues = posts as any;}
    );
  }
}
