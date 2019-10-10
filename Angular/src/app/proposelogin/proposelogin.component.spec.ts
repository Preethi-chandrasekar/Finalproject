import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposeloginComponent } from './proposelogin.component';

describe('ProposeloginComponent', () => {
  let component: ProposeloginComponent;
  let fixture: ComponentFixture<ProposeloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposeloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposeloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
