import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {
  DemographicQuestion,
  Question,
} from '../../Interfaces/interfaces';
import { DemographicService } from 'app/services/demographic.service';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-age-statistics',
  templateUrl: './age-statistics.component.html',
  styleUrls: ['./age-statistics.component.css'],
})
export class AgeStatisticsComponent implements OnInit {
  ngOnInit(): void { }
  // ageQuestions: any = [];
  private ageQuestion = new BehaviorSubject<DemographicQuestion>({
    question: '',
    answers: [],
    title: '',
    questionId: ''
  });
  public ageQuestion$ = this.ageQuestion.asObservable();


  isShow: boolean = false
  ageStaticticsData: any = {
    labels: [],
    datasets: [
      {
        label: 'Age destibution',
        data: [],
        backgroundColor: '#09240D',
      },
    ],
  };


  constructor(
    private dataService: DataService,
    private demographicService: DemographicService
  ) {
    this.demographicService.demographicQuestionsAndAnswers$.subscribe(val => {
      this.ageQuestion.next(val.filter(val => val.title == 'age')[0]);
      this.demographicService.getAgeStatistics(this.ageQuestion.getValue())
    });
    this.demographicService.ageStatistics$.subscribe(val => {
      let keys = Object.keys(val)
      let values = Object.values(val)
      this.ageStaticticsData = {
        labels: keys,
        datasets: [
          {
            label: 'Age destibution',
            data: values,
            backgroundColor: '#09240D',
          },
        ],
      };
      if (keys.length) {
        this.isShow = true
      }
    })
  }


}
