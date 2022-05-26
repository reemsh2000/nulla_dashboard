import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Question, Statistics } from '../Interfaces/interfaces'
@Injectable({
  providedIn: 'root',
})
export class StaticticsService {
  private chartsStatistics = new BehaviorSubject<Statistics[]>([]);
  public chartsStatistics$ = this.chartsStatistics.asObservable();

  pesrsonalityQuestions: Question[] = [];
  leadQuestions: Question[] = [];
  driverQuestions: Question[] = [];



  constructor(private dataService: DataService) {
    this.getFirstQuestionRef('personal', (questionRef: string) => {
      this.getQuestions(questionRef, "personal", (value: any) => {
        this.pesrsonalityQuestions.push(value);
      });
    });
    this.getFirstQuestionRef(
      'lead_question',
      (questionRef: string) => {
        this.getQuestions(questionRef, "lead_question", (value: any) => {
          this.leadQuestions.push(value);
        });
      }
    );
    this.getFirstQuestionRef(
      'driver',
      (questionRef: string) => {
        this.getQuestions(questionRef, "driver", (value: any) => {
          this.driverQuestions.push(value);
        });
      }
    );
  }
  // 
  getFirstQuestionRef(questionType: string, cb: any): void {
    this.dataService.getQuestions().subscribe((res: any) => {
      for (let i = 0; i < res.logic.length; i++) {
        if (res.logic[i].actions[0].details.value.value === questionType) {
          cb(res.logic[i].ref);
          break;

        }
      }
    });
  }

  //  Get the  questions for the stack chartPersonality


  getQuestions(firstRef: string, questionsGroup: string, cb: any): void {
    let personalityQuestion: Question[] = [];
    this.dataService.getQuestions().subscribe((res: any) => {
      res.fields.forEach((questions: any) => {
        for (let i = 0; i < questions.properties.fields?.length; i++) {
          if (questions.properties.fields[i].ref === firstRef) {
            questions.properties.fields.forEach((question: any) => {
              cb(question);
            });
          }
        }
      });
      // console.log("pers",res);

      questionsGroup === "personal" && this.getQuestionStatistics(this.pesrsonalityQuestions, 'Personality');
      questionsGroup === "lead_question" && this.getQuestionStatistics(this.leadQuestions, 'Lead Question');
      questionsGroup === "driver" && this.getQuestionStatistics(this.driverQuestions, 'Driver');
    });
  }

  //  Get the statistics of  Questions for the stack chart
  getQuestionStatistics(
    questions: Question[],
    title: string
  ) {
    let statistics = { agree: 0, neutral: 0, disagree: 0, title };
    this.dataService.getAnswers().subscribe((answers: any) => {
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
                case 'Unsure':
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
      agreePer = Math.round((agree / total) * 100),
      neutralPer = Math.round((neutral / total) * 100),
      disagreePer = Math.round((disagree / total) * 100);
    this.chartsStatistics.next([
      ...this.chartsStatistics.getValue(),
      { agree: agreePer, neutral: neutralPer, disagree: disagreePer, title },
    ]);
  }
}
