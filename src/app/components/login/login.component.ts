import { Component } from '@angular/core';
import { SignUpServices } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private signupServices: SignUpServices) {}
  login() {
    const loginData = {
      email: this.email,
      password: this.password
    }

    this.signupServices.loginUser(loginData).subscribe(
      (response: any) => {
        console.log('User loggedin successfullu:', response);
      },
      (error: any) => {
        console.log('Error logging user: ', error)
      }
    )
  }
}
