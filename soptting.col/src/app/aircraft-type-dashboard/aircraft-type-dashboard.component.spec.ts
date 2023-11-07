import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftTypeDashboardComponent } from './aircraft-type-dashboard.component';

describe('AircraftTypeDashboardComponent', () => {
  let component: AircraftTypeDashboardComponent;
  let fixture: ComponentFixture<AircraftTypeDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AircraftTypeDashboardComponent]
    });
    fixture = TestBed.createComponent(AircraftTypeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
