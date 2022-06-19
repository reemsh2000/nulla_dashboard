import { Statistics } from 'app/Interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-question',
  templateUrl: './question-statistic.component.html',
  styleUrls: ['./question-statistic.component.css']
})
export class QuestionStatisticComponent implements OnInit {
@Input() question:any
  constructor() { }

  ngOnInit(): void {
  }

}
