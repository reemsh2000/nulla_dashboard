import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  surveyId: string = '';
  
  setSurveyId(surveyId: string) {
    this.surveyId = surveyId;
  }

  apiUrl = 'https://us-central1-nulla-316b1.cloudfunctions.net/app/';

  constructor(private http: HttpClient) {}

  getStatistics() {
    return this.http.get(`${this.apiUrl}survey-statistics`);
  }
}
