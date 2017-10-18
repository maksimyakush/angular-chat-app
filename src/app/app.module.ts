import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import{RouterModule, Routes} from '@angular/router';
import {appRoutes} from '../routes';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import {environment} from '../environments/environment';

import {MessagesService} from './services/messages.service';
import {AuthService} from './services/auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeedComponent } from './components/feed/feed.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { MessageComponent } from './components/message/message.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserComponent } from './components/user/user.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatButtonModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeedComponent,
    ChatroomComponent,
    MessageComponent,
    SendMessageComponent,
    UsersListComponent,
    UserComponent,
    LoginFormComponent,
    SignupFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [MessagesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
