import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

 @Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent  {
  isShow: boolean = false;
  locationStaticticsData: any = {
    labels: [],
    datasets: [
      {
        label: 'Location destibution',
        data: [],
        backgroundColor: '#09240D',
      },
    ],
  };

  constructor(private dataService: DataService) {
    this.dataService.getStatistics().subscribe((res: any) => {
      const question = res?.DemographicStatistics.find(
        (x: any) => x.question.title === 'location'
      );

      this.locationStaticticsData = {
        labels: question.question.answers,
        datasets: [
          {
            label: 'Location destibution',
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
