import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'
import {Observable} from 'rxjs/Observable';
import {Message} from '../models/message.model';
import {User} from '../models/user.model';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class MessagesService {
  messagesList:AngularFirestoreCollection<Message>;
  usersList:AngularFirestoreCollection<User>
  messages: Observable<Message[]>;
  users: Observable<User[]>;
  messageDocument: AngularFirestoreDocument<Message>;
  message: Message;
  email:string;
  key:string;
name;
  constructor(private db:AngularFirestore, private afAuth:AngularFireAuth) {
    this.afAuth.authState.subscribe(data=>{
      if(data) {
        this.email = data.email;
      this.key = data.uid;
      this.name = data.displayName
      
      console.log(data)
      }
    });
   }

   getData(data) {
    this.email = data.email;
    this.key = data.uid;
    this.name = data.displayName;
   }
  
  getUsers() {
    this.usersList = this.db.collection('users');
    this.users =  this.usersList.valueChanges();
    return this.users;
  } 
  
  getMessages() {
    this.messagesList = this.db.collection('messages');
    this.messages =  this.messagesList.valueChanges();
    return this.messages;
  }

  sendMessage(messageToSend:string) {
    const documentToSend:Message = {
      key:this.key,
      email:this.email,
      name:this.name,
      message:messageToSend,
      timestamp: Date.now(),   
    }
    this.db.collection('messages').add(documentToSend);
  }

}


