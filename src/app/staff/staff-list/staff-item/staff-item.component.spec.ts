import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffItemComponent } from './staff-item.component';

describe('StaffItemComponent', () => {
  let component: StaffItemComponent;
  let fixture: ComponentFixture<StaffItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
