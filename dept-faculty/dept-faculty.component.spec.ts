import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptFacultyComponent } from './dept-faculty.component';

describe('DeptFacultyComponent', () => {
  let component: DeptFacultyComponent;
  let fixture: ComponentFixture<DeptFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
