import { Component } from '@angular/core';

@Component({
  selector: 'app-dasborad',
  templateUrl: './dasborad.component.html',
  styleUrls: ['./dasborad.component.css']
})
export class DasboradComponent  {

  title = 'nulla';
  openMenu: boolean = false;
  displayResult=false;
  checkMenu(event: boolean) {
    this.openMenu = event;
  }

  constructor() { }
  checkImport(event:any){
    this.displayResult=event;
  }

}
