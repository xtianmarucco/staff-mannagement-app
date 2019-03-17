import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMemberEditComponent } from './info-member-edit.component';

describe('InfoMemberEditComponent', () => {
  let component: InfoMemberEditComponent;
  let fixture: ComponentFixture<InfoMemberEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMemberEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMemberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
