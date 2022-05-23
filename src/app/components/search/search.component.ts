import { DataService } from './../../services/data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  link: string = 'https://api.typeform.com/forms/UzkZtaLj'
  @Output() importEvent = new EventEmitter<boolean>();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  getLinkclick() {
    let linkId = this.link.trim().split('forms/')[1]
    this.dataService.setSurveyId(linkId);
    this.importEvent.emit(true);
  }


}
