import { Injectable } from '@angular/core';
import { DataService } from '../../data.service';
import { Question, Statistics } from '../../Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class StackChartsService {
  personalityQuestions: Question[] = [];
  personalityQuestionsIndex = 4;

  constructor(private dataService: DataService) {
    this.personalityQuestions = this.getPersonalityQuestions("TNatOmnO");
  }

  //  Get the personality questions for the stack chart
  getPersonalityQuestions(surveyId: string): Question[] {
    let personalityQuestion: Question[] = []
    this.dataService.getQuestions(surveyId).subscribe((res: any) => {
      for (let i = 0; i <= 5; i++) {
        personalityQuestion.push(res.fields[this.personalityQuestionsIndex].properties.fields[i]);
      }
    });
    return personalityQuestion;
  }

  //  Get the statistics of perosnality Questions for the stack chart
  getPersonalityAnswersStatistics(surveyId: string): Statistics {
    let personalityQusetionsStatistics: Statistics = {
      agree: 0,
      neutral: 0,
      disagree: 0,
    }
    this.dataService.getAnswers(surveyId).subscribe((answers: any) => {
      answers.items.forEach((surveyResponse: any) => {
        surveyResponse.answers.forEach((answer: any) => {
          this.personalityQuestions.forEach((peronalityQusetion: any) => {
            if (answer.field.id === peronalityQusetion.id) {
              switch (answer.choice.label) {
                case 'Strongly agree':
                case 'Agree':
                  personalityQusetionsStatistics['agree'] = personalityQusetionsStatistics['agree'] + 1;
                  break;
                case 'Disagree':
                case 'Strongly disagree':
                  personalityQusetionsStatistics['disagree'] = personalityQusetionsStatistics['disagree'] + 1;
                  break;
                case 'Neutral':
                  personalityQusetionsStatistics['neutral'] = personalityQusetionsStatistics['neutral'] + 1;
                  break;
              }
            }

          }); //questions loop end 
        }) //answers loop end 
      });// survey response loop end 
    }

    ); // request end 
    return personalityQusetionsStatistics;
  }
}


