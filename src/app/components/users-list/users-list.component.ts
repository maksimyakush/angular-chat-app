import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {User} from '../../models/user.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:Observable<User[]>;
  constructor(private messagesService:MessagesService) { }

  ngOnInit() {
    this.users = this.messagesService.getUsers()
  }

}
