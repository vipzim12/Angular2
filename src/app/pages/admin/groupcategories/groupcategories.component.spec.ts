import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupcategoriesComponent } from './groupcategories.component';

describe('GroupcategoriesComponent', () => {
  let component: GroupcategoriesComponent;
  let fixture: ComponentFixture<GroupcategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupcategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
