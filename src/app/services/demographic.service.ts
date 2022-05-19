import { Injectable } from '@angular/core';
import { DemographicQuestion, Question } from 'app/Interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { StaticticsService } from './statictics.service';

@Injectable({
  providedIn: 'root',
})
export class DemographicService {
  private demographicStatistics = new BehaviorSubject<[]>([]);
  public demographicStatistics$ = this.demographicStatistics.asObservable();
  demographicQuestions: DemographicQuestion[] = [];
  constructor(
    private dataService: DataService,
    private staticticsService: StaticticsService
  ) {
    this.staticticsService.getFirstQuestionRef(
      'UzkZtaLj',
      'demographic',
      (questionRef: string) => {
        this.staticticsService.getQuestions(
          'UzkZtaLj',
          questionRef,
          (question: any) => {
          
            this.getDemographicQuestionsAndAnswers(question)
            console.log(this.demographicQuestions)
          }
        );
      }
    );
  }
  getDemographicQuestionsAndAnswers(question: any) {
    let demographicQuestion: DemographicQuestion = {
      question: '',
      answers: [],
    };
    switch (true) {
      case question.title.includes('old '):
        demographicQuestion.question = question.title;
        demographicQuestion.answers= question.properties.choices ;
        this.demographicQuestions.push(demographicQuestion);
        break;

      case question.title.includes('located'):
        demographicQuestion.question = question.title;
        demographicQuestion.answers= question.properties.choices ;
        this.demographicQuestions.push(demographicQuestion);

        break;

      case question.title.includes('business'):
        demographicQuestion.question = question.title;
        demographicQuestion.answers= question.properties.choices ;
        this.demographicQuestions.push(demographicQuestion);
        break;
    }
  }
}
