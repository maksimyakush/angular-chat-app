import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  email:string;
  password:string;
  displayName:string;
  constructor( private authService:AuthService) { }

  ngOnInit() {
  }

  signUp() {
    return this.authService.signUp(this.email,this.password, this.displayName)
  }

}
