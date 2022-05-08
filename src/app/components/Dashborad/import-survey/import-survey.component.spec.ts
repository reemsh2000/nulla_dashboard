import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportSurveyComponent } from './import-survey.component';

describe('ImportSurveyComponent', () => {
  let component: ImportSurveyComponent;
  let fixture: ComponentFixture<ImportSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
