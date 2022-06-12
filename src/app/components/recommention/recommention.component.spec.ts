import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommentionComponent } from './recommention.component';

describe('RecommentionComponent', () => {
  let component: RecommentionComponent;
  let fixture: ComponentFixture<RecommentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommentionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
