import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlandpageComponent } from './userlandpage.component';

describe('UserlandpageComponent', () => {
  let component: UserlandpageComponent;
  let fixture: ComponentFixture<UserlandpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserlandpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
