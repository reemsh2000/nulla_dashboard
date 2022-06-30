import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachQuestionStatisticComponent } from './each-question-statistic.component';

describe('EachQuestionStatisticComponent', () => {
  let component: EachQuestionStatisticComponent;
  let fixture: ComponentFixture<EachQuestionStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EachQuestionStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EachQuestionStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
