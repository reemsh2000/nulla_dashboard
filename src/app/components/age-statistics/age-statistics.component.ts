import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { AgeStatistics, Question, Statistics } from '../../Interfaces/interfaces';

@Component({
  selector: 'app-age-statistics',
  templateUrl: './age-statistics.component.html',
  styleUrls: ['./age-statistics.component.css']
})

export class AgeStatisticsComponent implements OnInit {
  ngOnInit(): void {
  }
  ageAnswers: any = [];
  ageQuestions: Question[] = [];
  statistics: AgeStatistics = {
    Adolescence: 0, //18-24
    Earlyadulthood: 0, //24-34
    Midlife: 0, //35-44
    Matureadulthood: 0, //45-54

  };
  data: any;

  constructor(public dataService: DataService) {
    this.ageQuestions = this.getAgeQuestions("TNatOmnO");



    this.data = {
      "labels": ['18-24', '25-34', '35-44', '45-54', '55-64', '65-74', '+75'],
      "datasets": [
        {
          label: 'Age destibution',
          data: [this.statistics["Adolescence"], this.statistics["Earlyadulthood"], this.statistics["Midlife"]],
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

  getPersonalityAnswersStatistics(surveyId: string): AgeStatistics {
    let personalityQusetionsStatistics: AgeStatistics = {
      Adolescence: 0, //18-24
      Earlyadulthood: 0, //24-34
      Midlife: 0, //35-44
      Matureadulthood: 0, //45-54
    }
    this.dataService.getAnswers(surveyId).subscribe((answers: any) => {
      answers.items.forEach((surveyResponse: any) => {
        surveyResponse.answers.forEach((answer: any) => {
          this.ageQuestions.forEach((peronalityQusetion: any) => {
            if (answer.field.id === peronalityQusetion.id) {
              switch (answer.choice.label) {
                case '18-24':

                  this.statistics['Adolescence'] = this.statistics['Adolescence'] + 1;
                  break;

                case '25-34':
                  this.statistics['Earlyadulthood'] = this.statistics['Earlyadulthood'] + 1;
                  break;
                case '35-44':
                  this.statistics['Midlife'] = this.statistics['Midlife'] + 1;
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
  //   }
}



