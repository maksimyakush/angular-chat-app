import { Component, OnInit, OnChanges } from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {Message} from '../../models/message.model';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  messages: Observable<Message[]>;
  constructor(private messagesService:MessagesService) { }

  ngOnInit() {
    this.messages = this.messagesService.getMessages();
  }

  ngOnChanges() {
    this.messages = this.messagesService.getMessages();
  }

}
