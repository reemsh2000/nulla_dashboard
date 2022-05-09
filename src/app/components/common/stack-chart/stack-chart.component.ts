import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack-chart',
  templateUrl: './stack-chart.component.html',
  styleUrls: ['./stack-chart.component.css']
})
export class StackChartComponent implements OnInit {
  @Input() data: any;
  @Input() header: string | undefined;
  constructor() { 
    console.log(this.data)
  }

  ngOnInit(): void {
  }

}
