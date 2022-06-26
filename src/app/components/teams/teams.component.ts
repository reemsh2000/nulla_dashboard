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
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
            backgroundColor: [
              '#FF6384',
              '#FFCE56',
              '#36A2EB',
              '#344767',
              '#2C0204',
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#FFCE56',
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
