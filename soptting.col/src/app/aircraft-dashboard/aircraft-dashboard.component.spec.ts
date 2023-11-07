import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftDashboardComponent } from './aircraft-dashboard.component';

describe('AircraftDashboardComponent', () => {
  let component: AircraftDashboardComponent;
  let fixture: ComponentFixture<AircraftDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AircraftDashboardComponent]
    });
    fixture = TestBed.createComponent(AircraftDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
