import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistorClientComponent } from './registor-client.component';

describe('RegistorClientComponent', () => {
  let component: RegistorClientComponent;
  let fixture: ComponentFixture<RegistorClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistorClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistorClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
