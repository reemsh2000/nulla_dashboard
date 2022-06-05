import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { FormGroup,  FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(6)),
  });
  massage: string;
  get f(){
    return this.profileForm.controls;
  }
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
login(){
  if(this.profileForm.valid){
    this.authService.login(this.profileForm.value)
  }
else{
  this.massage='You should enter email and password'
}
  
}
loginWithGoogle(){
  this.authService.loginWithGoogle()
  console.log("hi")
}
}
