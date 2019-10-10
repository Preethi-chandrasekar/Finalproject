import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AftersignupComponent } from './aftersignup.component';

describe('AftersignupComponent', () => {
  let component: AftersignupComponent;
  let fixture: ComponentFixture<AftersignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AftersignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AftersignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
