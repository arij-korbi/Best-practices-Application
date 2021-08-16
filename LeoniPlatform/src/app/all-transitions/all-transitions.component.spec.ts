import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTransitionsComponent } from './all-transitions.component';

describe('AllTransitionsComponent', () => {
  let component: AllTransitionsComponent;
  let fixture: ComponentFixture<AllTransitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTransitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTransitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
