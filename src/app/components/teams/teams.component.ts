import { Component } from '@angular/core';
import { DataService } from 'app/services/data.service';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent {
  teamsStaticticsData: any = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['#192e14', '#f08001', '#f08001','#6d812b'],
        hoverBackgroundColor: ['#71C21E', '#25400A', '#FF9F29','#FAF3E3'],
      },
    ],
  };

  isShow: boolean = false;
  constructor(private dataService: DataService) {
    this.dataService.getStatistics().subscribe((res: any) => {
      const question = res?.DemographicStatistics.find(
        (x: any) => x.question.title === 'teams'
      );

      this.teamsStaticticsData = {
        labels: question.question.answers,
        datasets: [
          {
            data: Object.values(question.questionStatistic),
            backgroundColor: ['#192e14', '#f08001', '#f08001','#6d812b'],
            hoverBackgroundColor: [
              '#7387A9',
              '#FF9F29',
              '#36A2EB',
              '#344767',
              '#2C0204',
            ],
          },
        ],
      };
      if (question.question.answers.length) {
        this.isShow = true;
      }
    });
  }
}
