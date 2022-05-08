import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthImageSideComponent } from './auth-image-side.component';

describe('AuthImageSideComponent', () => {
  let component: AuthImageSideComponent;
  let fixture: ComponentFixture<AuthImageSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthImageSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthImageSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
