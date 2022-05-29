import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  
  });

  proForm = new FormGroup({
    name:new FormControl(''),
    phone: new FormControl('')
  
  });
 
  constructor(private authService:AuthService) { }
 
  ngOnInit(): void {
  }
  register(){

    this.authService.register(this.registerForm.value)
    console.log(this.registerForm.value)
    // let Record = {
    //   'name':this.name,
    //   'phone':this.phone
    // }

    this.authService.admin(this.proForm.value)
    // console.log(Record)
  
  }
 

}
