import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecardmaintainceComponent } from './singlecardmaintaince.component';

describe('SinglecardmaintainceComponent', () => {
  let component: SinglecardmaintainceComponent;
  let fixture: ComponentFixture<SinglecardmaintainceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglecardmaintainceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglecardmaintainceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
