import { Statistics } from './../../../Interfaces/interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack-chart',
  templateUrl: './stack-chart.component.html',
  styleUrls: ['./stack-chart.component.css'],
})
export class StackChartComponent {
  @Input() statistics: Statistics | undefined;
  @Input() header: string | undefined;
  constructor() {}
}
