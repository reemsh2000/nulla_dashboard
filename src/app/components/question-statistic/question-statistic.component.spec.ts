import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionStatisticComponent } from './question-statistic.component';

describe('AllQuestionsComponent', () => {
  let component: QuestionStatisticComponent;
  let fixture: ComponentFixture<QuestionStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
