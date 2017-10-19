import {Router} from '@angular/router';
import {SignupFormComponent} from './app/components/signup-form/signup-form.component';
import {ChatroomComponent} from './app/components/chatroom/chatroom.component';
import {LoginFormComponent} from './app/components/login-form/login-form.component';
import {TicTacToeComponent} from './app/components/tic-tac-toe/tic-tac-toe.component';


export const appRoutes = [
    {path:'signup', component: SignupFormComponent},
    {path:'tictactoe', component: TicTacToeComponent},
    {path:'login', component: LoginFormComponent},
    {path:'chatroom', component: ChatroomComponent},
    {path:'', redirectTo: 'signup', pathMatch:'full'},   
]
    
