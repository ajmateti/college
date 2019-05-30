import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptAboutComponent } from './dept-about.component';

describe('DeptAboutComponent', () => {
  let component: DeptAboutComponent;
  let fixture: ComponentFixture<DeptAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
