import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderDetailComponent } from './add-order-detail.component';

describe('AddOrderDetailComponent', () => {
  let component: AddOrderDetailComponent;
  let fixture: ComponentFixture<AddOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
