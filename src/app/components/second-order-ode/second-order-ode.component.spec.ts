import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondOrderOdeComponent } from './second-order-ode.component';

describe('SecondOrderOdeComponent', () => {
  let component: SecondOrderOdeComponent;
  let fixture: ComponentFixture<SecondOrderOdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondOrderOdeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondOrderOdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
