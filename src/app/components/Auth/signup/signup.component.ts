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
  name:string='';
  phone:number=0;

  constructor(private authService:AuthService) { }
 
  ngOnInit(): void {
  }
  register(){

    this.authService.register(this.email, this.password,this.name,this.phone)
    let Record = {
      'name':this.name,
      'phone':this.phone
    }
    this.authService.admin(Record)
    console.log(Record)
  
  }
 

}
