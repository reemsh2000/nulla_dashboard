import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsideService {
  private isTypeSection = new BehaviorSubject<string>('Import Survey');
  public sectionName$ = this.isTypeSection.asObservable();
  constructor() {}

  get sectionName(): string {
    return this.isTypeSection.getValue();
  }

  private set sectionName(val: string) {
    this.isTypeSection.next(val);
  }

  setSection(name: string) {
    this.sectionName = name;
  }
}