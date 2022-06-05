import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interestCompany = new FormGroup({
    goals:new FormControl('',Validators.required),
    hearAboutUs: new FormControl('',Validators.required),
    climate: new FormControl('',Validators.required),
 
  
  });
  massage: string;
  
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  get f(){
    return this.interestCompany.controls;
  }
  saveInterestQuestions(){
 if(this.interestCompany.valid){
  this.authService.intrestQuestions(this.interestCompany.value)
 }else{
   this.massage='You should enter value in all feilds'
 }
 
  }
}
