import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { DemographicQuestion, Question } from '../../Interfaces/interfaces';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-age-statistics',
  templateUrl: './age-statistics.component.html',
  styleUrls: ['./age-statistics.component.css'],
})
export class AgeStatisticsComponent {
  isShow: boolean = false;
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

  constructor(private dataService: DataService) {
    this.dataService.getStatistics().subscribe((res: any) => {
      const question = res?.DemographicStatistics.find(
        (x: any) => x.question.title === 'age'
      );

      this.ageStaticticsData = {
        labels: question.question.answers,
        datasets: [
          {
            label: 'Age destibution',
            data: question.questionStatistic,
            backgroundColor: '#09240D',
          },
        ],
      };
      if (question.question.answers.length) {
        this.isShow = true;
      }
    });
  }
}
