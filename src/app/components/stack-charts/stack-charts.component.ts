import { Component } from '@angular/core';
import { StaticticsService } from '../../services/statictics.service';

@Component({
  selector: 'app-stack-charts',
  templateUrl: './stack-charts.component.html',
  styleUrls: ['./stack-charts.component.css'],
})
export class StackChartsComponent {
  constructor(public stackService: StaticticsService) {
  }
}
