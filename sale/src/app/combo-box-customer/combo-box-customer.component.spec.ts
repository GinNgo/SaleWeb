import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboBoxCustomerComponent } from './combo-box-customer.component';

describe('ComboBoxCustomerComponent', () => {
  let component: ComboBoxCustomerComponent;
  let fixture: ComponentFixture<ComboBoxCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComboBoxCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboBoxCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
