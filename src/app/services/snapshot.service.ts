import { Injectable } from '@angular/core';
import { Question, Statistics } from 'app/Interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class SnapshotService {
  highlightQuestionsRefs: any = [];
  highlightQuestions: any = [];

  private highlightStatistics = new BehaviorSubject<any>([]);
  public highlightStatistics$ = this.highlightStatistics.asObservable();

  constructor(private dataService: DataService) {
    this.getHighlightQuestionsRef();
  }
  getHighlightQuestionsRef(): void {
    this.dataService.getQuestions().subscribe((res: any) => {
      res.logic.forEach((question: any) => {
        if (question.actions.length > 1) {
          question.actions.forEach((action: any) => {
            if (action.details.value.value === 'highlight') {
              // cb(question.ref);
              this.highlightQuestionsRefs.push(question.ref);
            }
          });
        }
      });
      this.getQuestionsUsingRefs(this.highlightQuestionsRefs);
    });
  }

  getQuestionsUsingRefs(refs: string[]): void {
    let personalityQuestion: Question[] = [];
    this.dataService.getQuestions().subscribe((res: any) => {
      res.fields.forEach((questions: any) => {
        for (let i = 0; i < questions.properties.fields?.length; i++) {
          refs.forEach((ref: string) => {
            if (questions.properties.fields[i].ref === ref) {
              console.log('ref', questions.properties.fields[i]);
              this.highlightQuestions.push(questions.properties.fields[i]);
            }
          });
        }
      });
      this.highlightQuestions.forEach((question: any) =>
        this.getQuestionStatistics(question)
      );
    });
  }
  getQuestionStatistics(question: Question) {
    let statistics = { agree: 0, rest: 0, title: '' };
    this.dataService.getAnswers().subscribe((answers: any) => {
      answers.items.forEach((surveyResponse: any) => {
        surveyResponse.answers.forEach((answer: any) => {
          if (answer.field.id === question.id) {
            statistics['title'] = question.title;

            switch (answer.choice.label) {
              case 'Strongly agree':
              case 'Agree':
                statistics['agree'] = statistics['agree'] + 1;
                break;
              case 'Disagree':
              case 'Strongly disagree':
              case 'Neutral':
              case 'Unsure':
                statistics['rest'] = statistics['rest'] + 1;
                break;
            }
          }
        }); //answers loop end
      }); // survey response loop end
      this.convertToPercentage(statistics);
    });
  }
  convertToPercentage({ agree, rest, title }: any) {
    let total = agree + rest;
    let agreePer = Math.round((agree / total) * 100);
    this.highlightStatistics.next([
      ...this.highlightStatistics.getValue(),
      { agree: agreePer, title },
    ]);
    console.log(this.highlightStatistics.getValue());
    
  }
}
