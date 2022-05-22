import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import {  Question, Statistics } from '../../Interfaces/interfaces';
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

  data: any;
  statistics: any = {
    Lodon: 10, //18-24
    Magrate: 20, //24-34
    OtherLocation: 30, //35-44
    //45-54

  };
  constructor(public dataService: DataService) {
    this.data = {
      "labels": ['Lodon', 'Magrate', 'Other Location'],
      "datasets": [
        {
          label: 'Age destibution',
          data: [this.statistics["Lodon"], this.statistics["Magrate"], this.statistics["OtherLocation"]],
          backgroundColor: '#FC8424',
        }
      ]
    }
  }

}
