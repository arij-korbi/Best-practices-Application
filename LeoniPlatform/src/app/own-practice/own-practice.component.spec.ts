import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnPracticeComponent } from './own-practice.component';

describe('OwnPracticeComponent', () => {
  let component: OwnPracticeComponent;
  let fixture: ComponentFixture<OwnPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
