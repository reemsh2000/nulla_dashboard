import { Statistics } from './../../Interfaces/interfaces';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { StackChartsService } from './stack-charts.service';
@Component({
  selector: 'app-stack-charts',
  templateUrl: './stack-charts.component.html',
  styleUrls: ['./stack-charts.component.css']
})
export class StackChartsComponent implements OnInit, OnDestroy {
  personalityStatistics: Statistics = {
    agree: 0,
    neutral: 0,
    disagree: 0
  }
  leadStatistics: Statistics = {
    agree: 0,
    neutral: 0,
    disagree: 0
  }

  constructor(public stackService: StackChartsService) {
    this.personalityStatistics = this.stackService.getQuestionStatistics('UzkZtaLj', this.stackService.pesrsonalityQuestions);
    // this.leadStatistics = this.stackService.getQuestionStatistics('UzkZtaLj', this.stackService.leadQuestions);
    console.log("personalityStatistics", this.stackService.getPersonaResult);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  }

