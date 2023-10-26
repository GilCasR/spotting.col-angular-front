import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportsDashboardComponent } from './airports-dashboard.component';

describe('AirportsDashboardComponent', () => {
  let component: AirportsDashboardComponent;
  let fixture: ComponentFixture<AirportsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirportsDashboardComponent]
    });
    fixture = TestBed.createComponent(AirportsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
