import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../../services/messages.service';
import {Message} from '../../models/message.model';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  messageToSend:string;
  constructor(private messagesService:MessagesService) { }

  ngOnInit() {
  }

  sendMessage() {
    this.messagesService.sendMessage(this.messageToSend);
    this.messageToSend = '';
  }

}
