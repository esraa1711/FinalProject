import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardmaintainceComponent } from './dashboardmaintaince.component';

describe('DashboardmaintainceComponent', () => {
  let component: DashboardmaintainceComponent;
  let fixture: ComponentFixture<DashboardmaintainceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardmaintainceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardmaintainceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
