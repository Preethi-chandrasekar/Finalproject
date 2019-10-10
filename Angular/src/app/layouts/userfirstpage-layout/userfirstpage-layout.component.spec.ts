import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfirstpageLayoutComponent } from './userfirstpage-layout.component';

describe('UserfirstpageLayoutComponent', () => {
  let component: UserfirstpageLayoutComponent;
  let fixture: ComponentFixture<UserfirstpageLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfirstpageLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfirstpageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
