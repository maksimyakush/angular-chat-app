import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {
  id;turn;list;score;
  constructor(private db:AngularFirestore, private afAuth:AngularFireAuth) {
    this.afAuth.authState.subscribe(user=>{
      if(user) this.id = user.uid;
    })
   }
  number = 0;
  
  UpOne() {

    this.score++;
    this.db.doc(`game/c8ev8zOrqVYkddibgTzt/`).update({turn:this.id,score:this.score});
    // this.db.collection(`game`).snapshotChanges()
    // .map(arr=> arr.map(arr1=> {
    //   this.turn = arr1.payload.doc.data().turn;
    //   this.score = arr1.payload.doc.data().score;
      
    // }));
  }

  reset() {
    this.db.doc(`game/c8ev8zOrqVYkddibgTzt/`).update({turn:'',score:'0'});
  }

  ngOnInit() {
    this.list = this.db.collection(`game`).snapshotChanges()
    .map(arr=> arr.map(arr1=> {
      if(this.turn == this.id) {

      }
      const data = arr1.payload.doc.data();
     this.turn = arr1.payload.doc.data().turn;
     this.score = arr1.payload.doc.data().score;
     console.log(this.turn)
    
    })
  ) 
}
}
