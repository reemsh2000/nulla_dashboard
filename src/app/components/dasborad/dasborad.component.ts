import { DataService } from 'app/services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dasborad',
  templateUrl: './dasborad.component.html',
  styleUrls: ['./dasborad.component.css'],
})
export class DasboradComponent {
  title = 'nulla';
  showErrorMsg: boolean = false;
  openMenu: boolean = false;
  displayResult = false;
  constructor(private dataService: DataService) {}
  checkMenu(event: boolean) {
    this.openMenu = event;
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
