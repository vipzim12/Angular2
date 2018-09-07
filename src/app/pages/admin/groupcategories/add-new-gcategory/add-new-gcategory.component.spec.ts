import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewGcategoryComponent } from './add-new-gcategory.component';

describe('AddNewGcategoryComponent', () => {
  let component: AddNewGcategoryComponent;
  let fixture: ComponentFixture<AddNewGcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewGcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewGcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
