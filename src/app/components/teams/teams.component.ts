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
        backgroundColor: ['#1B5757', '#FFAD4F', '#CAF25A','#1C9486'],
        hoverBackgroundColor: ['#1B5757', '#FFAD4F', '#CAF25A','#1C9486'],
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
            backgroundColor: ['#1B5757', '#FFAD4F', '#CAF25A','#1C9486'],
            hoverBackgroundColor: ['#1B5757', '#FFAD4F', '#CAF25A','#1C9486'],
          },
        ],
      };
      if (question.question.answers.length) {
        this.isShow = true;
      }
    });
  }
}
