import { Statistics } from './../../Interfaces/interfaces';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { StackChartsService } from './stack-charts.service';
import {DataService} from '../../../app/services/data.service'
@Component({
  selector: 'app-stack-charts',
  templateUrl: './stack-charts.component.html',
  styleUrls: ['./stack-charts.component.css']
})
export class StackChartsComponent implements OnInit, OnDestroy {
  personalityStatistics: Statistics={
    agree: 0,
    neutral: 0,
    disagree: 0
  }
  leadStatistics: Statistics={
    agree: 0,
    neutral: 0,
    disagree: 0
  }

  constructor(public stackService: StackChartsService) {
    // this.personalityStatistics = this.stackService.getQuestionStatistics('UzkZtaLj', this.stackService.pesrsonalityQuestions);
    // this.leadStatistics = this.stackService.getQuestionStatistics('UzkZtaLj', this.stackService.leadQuestions);
    // console.log("personalityStatistics", this.personalityStatistics);
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {
    // let subscribtion = this.stackService.statistics$.subscribe((val: any) => {
    //   this.stackService.getQuestionStatistics('UzkZtaLj', this.stackService.pesrsonalityQuestions);
    //   console.log(val)
    // });

  }
  convertToPercentage(statistics: Statistics): Statistics {
    let total = statistics.agree + statistics.neutral + statistics.disagree;
    statistics.agree = (statistics.agree / total) * 100;
    statistics.neutral = (statistics.neutral / total) * 100;
    statistics.disagree = (statistics.disagree / total) * 100;
    return statistics;
  }
}

