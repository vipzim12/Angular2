import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EidtCategoryComponent } from './eidt-category.component';

describe('EidtCategoryComponent', () => {
  let component: EidtCategoryComponent;
  let fixture: ComponentFixture<EidtCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EidtCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EidtCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
