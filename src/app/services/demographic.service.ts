import { Injectable } from '@angular/core';
import { DemographicQuestion, Question } from 'app/Interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { StaticticsService } from './statictics.service';

@Injectable({
  providedIn: 'root',
})
export class DemographicService {
  private demographicQuestionsAndAnswers = new BehaviorSubject<DemographicQuestion[]>([]);
  public demographicQuestionsAndAnswers$ = this.demographicQuestionsAndAnswers.asObservable();
  demographicQuestions: DemographicQuestion[] = [];

  private ageStatistics = new BehaviorSubject<{}>({});
  public ageStatistics$ = this.ageStatistics.asObservable();

  private locationStatistics = new BehaviorSubject<{}>({});
  public locationStatistics$ = this.locationStatistics.asObservable();

  private teamsStatistics = new BehaviorSubject<{}>({});
  public teamsStatistics$ = this.teamsStatistics.asObservable();

  constructor(private dataService: DataService, private staticticsService: StaticticsService) {
    this.staticticsService.getFirstQuestionRef(
      'demographic',
      (questionRef: string) => {
        this.staticticsService.getQuestions(questionRef, (question: any) => {
          this.getDemographicQuestionsAndAnswers(question);
          // console.log(this.demographicQuestions);
        });
      }
    );
  }
  // to labels or answers choices for chart labels
  getQuestionLables(answers: any): string[] {
    let labels: string[] = [];
    answers.forEach((answer: any) => {
      labels.push(answer.label);
    });
    return labels;
  }
  //  Get the demographic questions and answers
  getDemographicQuestionsAndAnswers(question: any) {
    let demographicQuestion: DemographicQuestion = {
      question: '',
      answers: [],
      title: '',
      questionId: ''
    };
    switch (true) {
      case question.title.includes('old'):
        demographicQuestion.question = question.title;
        demographicQuestion.answers = this.getQuestionLables(question.properties.choices);
        demographicQuestion.title = 'age';
        demographicQuestion.questionId = question.id;
        this.demographicQuestions.push(demographicQuestion);
        break;

      case question.title.includes('located'):
        demographicQuestion.question = question.title;
        demographicQuestion.answers = this.getQuestionLables(question.properties.choices);
        demographicQuestion.title = 'location';
        demographicQuestion.questionId = question.id;
        this.demographicQuestions.push(demographicQuestion);

        break;

      case question.title.includes('business'):
        demographicQuestion.question = question.title;
        demographicQuestion.answers = this.getQuestionLables(question.properties.choices);
        demographicQuestion.title = 'teams';
        demographicQuestion.questionId = question.id;
        this.demographicQuestions.push(demographicQuestion);
        break;
    }
    this.demographicQuestionsAndAnswers.next([
      ...this.demographicQuestionsAndAnswers.getValue(),
      {
        question: demographicQuestion.question,
        answers: demographicQuestion.answers,
        title: demographicQuestion.title,
        questionId: demographicQuestion.questionId

      },
    ]);
  }
  // *******************Get Age Statictics*********************************
  getAgeStatistics(question: any) {
    let agestatistics: any = {};
    this.dataService.getAnswers().subscribe((answers: any) => {
      answers.items.forEach((surveyResponse: any) => {
        surveyResponse.answers.forEach((answer: any) => {
          if (answer.field.id === question?.questionId) {
            question.answers.forEach((questionAnswer: any) => {
              if (!agestatistics[questionAnswer]) agestatistics[questionAnswer] = 0;
              if (questionAnswer === answer.choice.label) {
                agestatistics[questionAnswer] += 1;
              }
            });
          }
        }); //answers loop end
      }); // survey response loop end
      this.ageStatistics.next(agestatistics);
    });
  }
  // *******************Get location Statictics*********************************
  getLocationStatistics(question: any) {
    let locationStatistics: any = {};

    this.dataService.getAnswers().subscribe((answers: any) => {
      answers.items.forEach((surveyResponse: any) => {
        surveyResponse.answers.forEach((answer: any) => {
          if (answer.field.id === question?.questionId) {
            question.answers.forEach((questionAnswer: any) => {
              if (!locationStatistics[questionAnswer]) locationStatistics[questionAnswer] = 0;
              if (questionAnswer === answer.choice.label) {
                locationStatistics[questionAnswer] += 1;
              }
            });
          }
        }); //answers loop end
      }); // survey response loop end
      this.locationStatistics.next(locationStatistics);
    });
  }

    // *******************Get teams Statictics*********************************
    getTeamsStatistics(question: any) {
      let teamsStatistics: any = {};
      this.dataService.getAnswers().subscribe((answers: any) => {
        answers.items.forEach((surveyResponse: any) => {
          surveyResponse.answers.forEach((answer: any) => {
            if (answer.field.id === question?.questionId) {
              question.answers.forEach((questionAnswer: any) => {
                if (!teamsStatistics[questionAnswer]) teamsStatistics[questionAnswer] = 0;
                if (questionAnswer === answer.choice.label) {
                  teamsStatistics[questionAnswer] += 1;
                }
              });
            }
          }); //answers loop end
        }); // survey response loop end
        // console.log(teamsStatistics, 'teamsStatistics');
        this.teamsStatistics.next(teamsStatistics);
      });
    }

}
