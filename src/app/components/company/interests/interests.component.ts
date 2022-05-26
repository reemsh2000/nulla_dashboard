import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {
  goals:string 
  firsrHear:string
  platfrom:string
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  
  saveInterestQuestions(){
    let Record={
      'goals':this.goals,
      'firsrHear':this.firsrHear,
      'platfrom':this.platfrom

    };
    this.authService.intrestQuestions(Record)
  }
}
