import { Component } from '@angular/core';
import { StaticticsService } from '../../services/statictics.service';

@Component({
  selector: 'app-stack-charts',
  templateUrl: './stack-charts.component.html',
  styleUrls: ['./stack-charts.component.css'],
})
export class StackChartsComponent {
  constructor(public stackService: StaticticsService) {
    let questionsPersonal = this.stackService.pesrsonalityQuestions;
    let questionsLead = this.stackService.leadQuestions;
    let queestionsDriver = this.stackService.driverQuestions;
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
    this.stackService.getQuestionStatistics(
      'UzkZtaLj',
      queestionsDriver,
      'driver'
    );
  }
}
