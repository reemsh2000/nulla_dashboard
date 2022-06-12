import { Component, Input } from '@angular/core';
import { AsideService } from 'app/services/aside.service';

@Component({
  selector: 'app-dasborad',
  templateUrl: './dasborad.component.html',
  styleUrls: ['./dasborad.component.css'],
})
export class DasboradComponent {
  openMenu: boolean=false ;
  title = 'nulla';
  displayResult = false;

  constructor(private asideService: AsideService) {
    this.asideService.openAside$.subscribe((val) => {
      this.openMenu = val;
    });
    this.asideService.setSection('Dashboard');

  }
  checkImport(event: any) {
    this.displayResult = event;
  }
}
