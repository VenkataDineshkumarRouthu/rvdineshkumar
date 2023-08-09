import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userID:string='';
  password:string='';
  login(){
    console.log('UserId',this.userID);
    console.log('Password',this.password);
  }

  path: string= "../assets/ang2.jpg";



}
