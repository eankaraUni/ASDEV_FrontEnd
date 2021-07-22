import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Issue } from 'src/app/model/Issue';
import { ServerHService } from 'src/app/services/server-h.service';

@Component({
  selector: 'app-adashboard',
  templateUrl: './adashboard.component.html',
  styleUrls: ['./adashboard.component.css']
})
export class AdashboardComponent implements OnInit {

  constructor(private serverh: ServerHService) { }
  issues: any[] =[];
  // dataSource = new BehaviorSubject<Issue[]>([]);
  displayedColumns = ['Description', 'author','assignedUser', 'status'];
  ngOnInit(): void {
    this.serverh.getAllIssues().subscribe(
      // data => console.log(data)
      posts => {
        console.log(posts);
        this.issues = posts as any;
      }
      // (posts) => (this.issues = posts as any[])
    );
  }

}
