import { Component } from '@angular/core';
import { StackChartsService } from './stack-charts.service';

@Component({
  selector: 'app-stack-charts',
  templateUrl: './stack-charts.component.html',
  styleUrls: ['./stack-charts.component.css'],
})
export class StackChartsComponent {
  constructor(public stackService: StackChartsService) {
    let questionsPersonal = this.stackService.pesrsonalityQuestions;
    let questionsLead = this.stackService.leadQuestions;
    this.stackService.getQuestionStatistics(
      'UzkZtaLj',
      questionsPersonal,
      'Personality'
    );
    this.stackService.getQuestionStatistics(
      'UzkZtaLj',
      questionsLead,
      'Lead question'
    );
  }
}
