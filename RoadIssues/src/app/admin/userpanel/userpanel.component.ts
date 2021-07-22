import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { ServerHService } from 'src/app/services/server-h.service';

@Component({
  selector: 'app-userpanel',
  templateUrl: './userpanel.component.html',
  styleUrls: ['./userpanel.component.css']
})
export class UserpanelComponent implements OnInit {
  users:any[] =[];
  tab:number | undefined;
  //users: User[] = [];
  userColumns = ["firstname", "lastname", "username", "email", "role"];
  constructor(private serverh: ServerHService) { }

  ngOnInit(): void {
    this.serverh.getAllUsers().subscribe(
      // data => console.log(data)
      posts => {
        console.log(posts);
        this.users = posts as any;
      }
    );
  }


}
