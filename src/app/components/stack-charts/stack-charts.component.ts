import { Statistics } from './../../Interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { StackChartsService } from './stack-charts.service';
@Component({
  selector: 'app-stack-charts',
  templateUrl: './stack-charts.component.html',
  styleUrls: ['./stack-charts.component.css']
})
export class StackChartsComponent implements OnInit {
  PersonalityStatistics: Statistics;

  constructor(private stackService: StackChartsService) {
    this.PersonalityStatistics = this.stackService.getPersonalityAnswersStatistics('TNatOmnO');

  }

  ngOnInit(): void {

  }

}
