import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  registerForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(3)),
  
  });

  proForm = new FormGroup({
    name:new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required)
  
  });
  get f(){
    return this.registerForm.controls;
  }
  get r(){
    return this.proForm.controls;
  }
  massage: string;
 
  constructor(private authService:AuthService) { }
 
  ngOnInit(): void {
  }
  register(){
       if(this.proForm.valid && this.registerForm.valid){
        this.authService.register(this.registerForm.value)
        console.log(this.registerForm.value)
       
        this.authService.addAdminNameAndPhone(this.proForm.value)
     
       }else{
         this.massage='you should enter value'
       }

  
  }
 

}
