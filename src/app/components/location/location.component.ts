import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { LoactionStatistics, Question, Statistics } from '../../Interfaces/interfaces';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {



  ngOnInit(): void {
  }
  ageAnswers: any = [];
  ageQuestions: Question[] = [];
  statistics: LoactionStatistics = {
    londen: 0,
    magrate: 0,
    others: 0,

  };
  data: any;
  constructor(public dataService: DataService) {
    this.ageQuestions = this.getAgeQuestions("UzkZtaLj");



    this.data = {
      "labels": ['Londan', 'Margate', 'Other location'],
      "datasets": [
        {
          label: 'Age destibution',
          data: [this.statistics["londen"], this.statistics["magrate"], this.statistics["others"]],
          backgroundColor: '#FC8424',
        }
      ]
    }
   }
   

  getAgeQuestions(surveyId: string): Question[] {
    let ageQuestion: Question[] = []
    this.dataService.getQuestions(surveyId).subscribe((res: any) => {
      console.log(res)
      for (let i = 0; i < 1; i++) {
        ageQuestion.push(res.fields[0]);
      }
      console.log(ageQuestion)
    });
    return ageQuestion;
  }

  getPersonalityAnswersStatistics(surveyId: string): LoactionStatistics {
    let personalityQusetionsStatistics: LoactionStatistics = {
      londen: 0,
      magrate: 0,
      others: 0,
    }
    this.dataService.getAnswers(surveyId).subscribe((answers: any) => {
      answers.items.forEach((surveyResponse: any) => {
        surveyResponse.answers.forEach((answer: any) => {
          this.ageQuestions.forEach((peronalityQusetion: any) => {
            if (answer.field.id === peronalityQusetion.id) {
              switch (answer.choice.label) {
                case 'londen':

                  this.statistics['londen'] = this.statistics['londen'] + 1;
                  break;

                case 'Margate':
                  this.statistics['magrate'] = this.statistics['magrate'] + 1;
                  break;
                case 'Other location':
                  this.statistics['others'] = this.statistics['others'] + 1;
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
