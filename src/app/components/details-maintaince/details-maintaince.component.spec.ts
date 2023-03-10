import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMaintainceComponent } from './details-maintaince.component';

describe('DetailsMaintainceComponent', () => {
  let component: DetailsMaintainceComponent;
  let fixture: ComponentFixture<DetailsMaintainceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMaintainceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMaintainceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
