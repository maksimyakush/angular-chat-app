import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../../models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message:Message;
  constructor() { }
  email: string;
  name: string;
  messageContent: string;
  timestamp: any;
  isOwnMessage: boolean;
  ownEmail: string;
  ngOnInit() {
    this.messageContent = this.message.message;
    this.timestamp = this.message.timestamp;
    this.email = this.message.email;
    this.name = this.message.name;
  }

}
