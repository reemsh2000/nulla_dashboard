import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackChartsComponent } from './stack-charts.component';

describe('StackChartsComponent', () => {
  let component: StackChartsComponent;
  let fixture: ComponentFixture<StackChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
