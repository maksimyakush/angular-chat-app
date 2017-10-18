import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore'
import { AngularFireAuth } from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {Message} from '../models/message.model';
import {User} from '../models/user.model';

@Injectable()
export class AuthService {
  
  constructor(private db:AngularFirestore, private afAuth:AngularFireAuth, private router:Router) {
    this.afAuth.authState.subscribe(a=>console.log(a))
   }

   signUp(email, password, displayName) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(res=>{
      res.updateProfile({displayName});
      return res;
    })
    .then(res=>{
      this.db.doc(`users/${res.uid}`).set({
        email,password, userName:displayName, key:res.uid,
      })
    })
    .then(res=>this.router.navigate(['chatroom']))
   }

   logout() {
    this.afAuth.auth.signOut().then(a=>console.log('logged out'))
    .then(()=>this.router.navigate(['login']))
    
  }

  login(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then(res=> {
      this.router.navigate(['chatroom']);
    }).catch(err=>console.log(err))
  }
    
}
