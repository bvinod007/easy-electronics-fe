import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpServices } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: 'sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  firstname!: string;
  lastname!: string;
  email!: string;
  password!: string;

  constructor(private signupServices: SignUpServices) {
  }

  submitForm() {

    const newUser = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    }
    
      this.signupServices.createUser(newUser).subscribe(
        (response: any) => {
          console.log('User created successfully:', response);
        },
        (error: any) => {
          console.log('Error creating user:', error);
        }
      );
    }
    // You can also navigate to another page here
}
