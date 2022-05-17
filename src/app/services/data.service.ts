import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = 'https://api.typeform.com/forms/';
  headers = new HttpHeaders({
    "Authorization": "Bearer tfp_2Ph2w1NhEaFUmqoLFnsDGQo72i7VHt3uvjYXtvtow9hv_3mJs7NpZAGDsrf",
  });
  getAgeQuestions: any;

  constructor(private http: HttpClient) { }

  
  getQuestions(formId: string) {
    return this.http.get(`${this.apiUrl}${formId}`, { headers: this.headers })
  }


  getAnswers(formId: string) {
    return this.http.get(`${this.apiUrl}${formId}/responses`, { headers: this.headers })
  }

}
