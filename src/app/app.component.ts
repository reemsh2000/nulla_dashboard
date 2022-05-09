import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nulla';

  data={
    agree: 70,
    netural: 20,
    disagree: 10,
  }
}
