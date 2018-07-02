import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ECASignupFormComponent } from './ecasignup-form.component';

describe('ECASignupFormComponent', () => {
  let component: ECASignupFormComponent;
  let fixture: ComponentFixture<ECASignupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ECASignupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ECASignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
