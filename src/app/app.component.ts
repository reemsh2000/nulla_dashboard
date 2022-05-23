import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
