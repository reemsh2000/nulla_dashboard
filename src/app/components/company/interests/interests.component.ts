import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  interestCompany = new FormGroup({
    goals:new FormControl(''),
    hearAboutUs: new FormControl(''),
    climate: new FormControl(''),
 
  
  });
  
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  
  saveInterestQuestions(){
 
    this.authService.intrestQuestions(this.interestCompany.value)
  }
}
