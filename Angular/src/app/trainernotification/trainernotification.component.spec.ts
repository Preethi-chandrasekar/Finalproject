import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainernotificationComponent } from './trainernotification.component';

describe('TrainernotificationComponent', () => {
  let component: TrainernotificationComponent;
  let fixture: ComponentFixture<TrainernotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainernotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainernotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
