import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {
  AgeStatistics,
  Question,
  Statistics,
} from '../../Interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';
import { StaticticsService } from '../../services/statictics.service';
import { DemographicService } from 'app/services/demographic.service';
@Component({
  selector: 'app-age-statistics',
  templateUrl: './age-statistics.component.html',
  styleUrls: ['./age-statistics.component.css'],
})
export class AgeStatisticsComponent implements OnInit {
  ngOnInit(): void {}

  private personalityStatistics = new BehaviorSubject<AgeStatistics[]>([]);
  public personalityStatistics$ = this.personalityStatistics.asObservable();

  
  private Statisticsage = new BehaviorSubject<object>({});
  public Statisticsage$ = this.personalityStatistics.asObservable();

  ageQuestions: Question[] = [];
  statistics: AgeStatistics = {
    Adolescence: 0, //18-24
    Earlyadulthood: 0, //24-34
    Midlife: 0, //35-44
    Matureadulthood: 0, //45-54
  };
  data: any = {
    labels: [],
    datasets: [
      {
        label: 'Age destibution',
        data: [
          this.statistics['Adolescence'],
          this.statistics['Earlyadulthood'],
          this.statistics['Midlife'],
        ],
        backgroundColor: '#FC8424',
      },
    ],
  };
  
ageQuestion:any
  constructor(
    private dataService: DataService,
    private demographicService: DemographicService
  ) {
   
      this.demographicService.demographicStatistics$.subscribe((res) => {
        this.data.labels = [];
       
        this.getQuestionStatistics('UzkZtaLj',res[0].question);
        res[0].answers.forEach((item: any) => {
          let prev = this.data.labels;
          this.data.labels = [...prev, item.label];
        });
      })

  
  }
    //  Get the statistics of perosnality Questions for the stack chart
    getQuestionStatistics(
      surveyId: string,
      question:any     
    ) {
      let agestatistics = { Adolescence: 0, Earlyadulthood: 0, Midlife: 0 ,Matureadulthood:0};
      this.dataService.getAnswers(surveyId).subscribe((answers: any) => {
        answers.items.forEach((surveyResponse: any) => {
          surveyResponse.answers.forEach((answer: any) => {
              if (answer.field.id === question.id) {
                switch (answer.choice.label) {
                  case '18-24':

                    agestatistics['Adolescence'] = agestatistics['Adolescence'] + 1;
                    break;
                  case '25-34':

                    agestatistics['Earlyadulthood'] = agestatistics['Earlyadulthood'] + 1;
                    break;
                  case '35-44':
                    agestatistics['Midlife'] = agestatistics['Midlife'] + 1;
                    break;
                    case '45-54':
                      agestatistics['Matureadulthood'] = agestatistics['Matureadulthood'] + 1;
                      break;
                }

              }
            
          }); //answers loop end
        }); // survey response loop end
            this.Statisticsage.next(agestatistics);
      });
    }
}
