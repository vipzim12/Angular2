import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGcategoryComponent } from './edit-gcategory.component';

describe('EditGcategoryComponent', () => {
  let component: EditGcategoryComponent;
  let fixture: ComponentFixture<EditGcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
