import { DataService } from 'app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { AsideService } from 'app/services/aside.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-each-question-statistic',
  templateUrl: './each-question-statistic.component.html',
  styleUrls: ['./each-question-statistic.component.css'],
})
export class EachQuestionStatisticComponent implements OnInit {
  openMenu: boolean = false;
  displayResult = false;
  private allQuestions = new BehaviorSubject<any[]>([]);
  public allQuestions$ = this.allQuestions.asObservable();
  constructor(private data: DataService, private asideService: AsideService) {
    this.asideService.openAside$.subscribe((val) => {
      this.openMenu = val;
    });
    this.asideService.setSection('All Questions');
  }

  ngOnInit(): void {}
  checkImport(event: any) {
    this.displayResult = event;
    this.data.getStatistics().subscribe((res: any) => {
      this.allQuestions.next([
        ...res.questionsStatistics,
      ]);
      console.log(this.allQuestions.getValue());
    });
  }
}
