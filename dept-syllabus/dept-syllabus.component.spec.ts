import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptSyllabusComponent } from './dept-syllabus.component';

describe('DeptSyllabusComponent', () => {
  let component: DeptSyllabusComponent;
  let fixture: ComponentFixture<DeptSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
