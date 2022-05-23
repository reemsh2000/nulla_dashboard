import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {
  DemographicQuestion,
  Question,
  Statistics,
} from '../../Interfaces/interfaces';
import { DemographicService } from 'app/services/demographic.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
})
export class LocationComponent implements OnInit {
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

  private locationQuestion = new BehaviorSubject<DemographicQuestion>({
    question: '',
    answers: [],
    title: '',
    questionId: '',
  });
  public locationQuestion$ = this.locationQuestion.asObservable();
  ngOnInit(): void {}

  constructor(
    public dataService: DataService,
    private demographicService: DemographicService
  ) {
    this.demographicService.demographicQuestionsAndAnswers$.subscribe((val) => {
      this.locationQuestion.next(
        val.filter((val) => val.title == 'location')[0]
      );
      this.demographicService.getLocationStatistics(
        this.locationQuestion.getValue()
      );
    });
    this.demographicService.locationStatistics$.subscribe((val) => {
      let keys = Object.keys(val);
      let values = Object.values(val);
      this.locationStaticticsData = {
        labels: keys,
        datasets: [
          {
            label: 'Location destibution',
            data: values,
            backgroundColor: '#58A364',
          },
        ],
      };
      if (keys.length) {
        this.isShow = true;
      }
    });
  }
}
