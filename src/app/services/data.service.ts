import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  surveyId: string = ''
  private questions = new BehaviorSubject<any>({});
  public questions$ = this.questions.asObservable();

  setSurveyId(surveyId: string) {
    this.surveyId = surveyId;
  }

  apiUrl = 'https://api.typeform.com/forms/';
  headers = new HttpHeaders({
    Authorization:
      'Bearer tfp_2Ph2w1NhEaFUmqoLFnsDGQo72i7VHt3uvjYXtvtow9hv_3mJs7NpZAGDsrf',
  });

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get(`${this.apiUrl}${this.surveyId}`, {
      headers: this.headers,
    });

  }




  getAnswers() {
    return this.http.get(`${this.apiUrl}${this.surveyId}/responses`, {
      headers: this.headers,
    });
  }
}
