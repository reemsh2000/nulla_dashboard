import { Statistics } from 'app/Interfaces/interfaces';
import { DataService } from 'app/services/data.service';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-stack-charts',
  templateUrl: './stack-charts.component.html',
  styleUrls: ['./stack-charts.component.css'],
})
export class StackChartsComponent {
  private chartsStatistics = new BehaviorSubject<Statistics[]>([]);
  public chartsStatistics$ = this.chartsStatistics.asObservable();

  constructor(public dataService: DataService) {
    this.dataService.getStatistics().subscribe((res: any) => {
      this.chartsStatistics.next(res.personalityStaistics);
    });
  }
}
