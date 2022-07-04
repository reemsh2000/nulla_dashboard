import { Component, Input, OnInit } from '@angular/core';
import { AsideService } from 'app/services/aside.service';
import { DataService } from 'app/services/data.service';

@Component({
  selector: 'app-dasborad',
  templateUrl: './dasborad.component.html',
  styleUrls: ['./dasborad.component.css'],
})
export class DasboradComponent implements OnInit {
  openMenu: boolean = false;
  title = 'nula';
  displayResult = false;
  showErrorMsg: boolean = false;
  ErrorMsg = {
    severity: 'error',
    summary: 'Error',
    detail: 'You should enter a valid type form',
  };

  constructor(
    private asideService: AsideService,
    private dataService: DataService
  ) {
    this.asideService.openAside$.subscribe((val) => {
      this.openMenu = val;
    });
    this.asideService.setSection('Dashboard');
  }
  ngOnInit(): void {
    this.checkImport(true);
  }
  checkImport(event: any) {
    this.dataService.getStatistics().subscribe(
      (response: any) => {
        this.displayResult = event;
        this.showErrorMsg = false;
      },
      (error) => {
        this.showErrorMsg = true;
        this.displayResult = false;
      }
    );
  }
}
