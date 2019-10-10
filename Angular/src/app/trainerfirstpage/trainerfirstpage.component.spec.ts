import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerfirstpageComponent } from './trainerfirstpage.component';

describe('TrainerfirstpageComponent', () => {
  let component: TrainerfirstpageComponent;
  let fixture: ComponentFixture<TrainerfirstpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerfirstpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerfirstpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
