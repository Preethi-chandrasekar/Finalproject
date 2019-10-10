import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersearchresultComponent } from './trainersearchresult.component';

describe('TrainersearchresultComponent', () => {
  let component: TrainersearchresultComponent;
  let fixture: ComponentFixture<TrainersearchresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainersearchresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainersearchresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
