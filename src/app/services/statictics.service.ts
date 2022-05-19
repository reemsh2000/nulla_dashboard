import { BehaviorSubject, mergeMap, tap } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Question, Statistics } from '../Interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class StaticticsService {
  private personalityStatistics = new BehaviorSubject<Statistics[]>([]);
  public personalityStatistics$ = this.personalityStatistics.asObservable();

  pesrsonalityQuestions: Question[] = [];
  leadQuestions: Question[] = [];
  driverQuestions: Question[] = [];

  



  constructor(private dataService: DataService) {
    this.getFirstQuestionRef('UzkZtaLj', 'personal', (questionRef: string) => {
      this.getQuestions('UzkZtaLj', questionRef, (value: any) => {
        this.pesrsonalityQuestions.push(value);
      });
    });
    this.getFirstQuestionRef(
      'UzkZtaLj',
      'lead_question',
      (questionRef: string) => {
        this.getQuestions('UzkZtaLj', questionRef, (value: any) => {
          this.leadQuestions.push(value);
        });
      }
    );
    this.getFirstQuestionRef(
      'UzkZtaLj',
      'driver',
      (questionRef: string) => {
        this.getQuestions('UzkZtaLj', questionRef, (value: any) => {
          this.driverQuestions.push(value);
        });
      }
    );
  }
  
  getFirstQuestionRef(surveyId: string, questionType: string, cb: any): void {
    this.dataService.getQuestions(surveyId).subscribe((res: any) => {
      for (let i = 0; i < res.logic.length; i++) {
        if (res.logic[i].actions[0].details.value.value === questionType) {
          cb(res.logic[i].ref);
          break;
        }
      }
    });
  }

  //  Get the  questions for the stack chart
  getQuestions(surveyId: string, firstRef: string, cb: any): void {
    let personalityQuestion: Question[] = [];
    this.dataService.getQuestions(surveyId).subscribe((res: any) => {
      res.fields.forEach((questions: any) => {
        for (let i = 0; i < questions.properties.fields?.length; i++) {
          if (questions.properties.fields[i].ref === firstRef) {
            questions.properties.fields.forEach((question: any) => {
              cb(question);
            });
          }
        }
        return;
      });
    });
  }

    //  Get the statistics of perosnality Questions for the stack chart
    getQuestionStatistics(
      surveyId: string,
      questions: Question[],
      title: string
    ) {
      let statistics = { agree: 0, neutral: 0, disagree: 0, title };
      this.dataService.getAnswers(surveyId).subscribe((answers: any) => {
        answers.items.forEach((surveyResponse: any) => {
          surveyResponse.answers.forEach((answer: any) => {
            questions.forEach((question: any) => {
              if (answer.field.id === question.id) {
                switch (answer.choice.label) {
                  case 'Strongly agree':
                  case 'Agree':
                    statistics['agree'] = statistics['agree'] + 1;
                    break;
                  case 'Disagree':
                  case 'Strongly disagree':
                    statistics['disagree'] = statistics['disagree'] + 1;
                    break;
                  case 'Neutral':
                    statistics['neutral'] = statistics['neutral'] + 1;
                    break;
                }
              }
            });
          }); //answers loop end
        }); // survey response loop end
        this.convertToPercentage(statistics);
      });
    }
    convertToPercentage({ agree, neutral, disagree, title }: Statistics) {
      let total = agree + neutral + disagree,
        agreePer = (agree / total) * 100,
        neutralPer = (neutral / total) * 100,
        disagreePer = (disagree / total) * 100;
      this.personalityStatistics.next([
        ...this.personalityStatistics.getValue(),
        { agree: agreePer, neutral: neutralPer, disagree: disagreePer, title },
      ]);
    }
}
