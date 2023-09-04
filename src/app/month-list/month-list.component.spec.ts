import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthListComponent } from './month-list.component';

describe('MonthListComponent', () => {
  let component: MonthListComponent;
  let fixture: ComponentFixture<MonthListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonthListComponent]
    });
    fixture = TestBed.createComponent(MonthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
