import { Component } from '@angular/core';
import { staticticsService } from '../../services/statictics.service';

@Component({
  selector: 'app-stack-charts',
  templateUrl: './stack-charts.component.html',
  styleUrls: ['./stack-charts.component.css'],
})
export class StackChartsComponent {
  constructor(public stackService: staticticsService) {
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
