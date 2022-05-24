import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  email:string ='' ;
  password:string='';
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  register(){
    this.authService.register(this.email, this.password)
    console.log(this.email)
    this.email=''
    this.password=''


  }

}
