import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditLandingComponent } from './audit-landing.component';

describe('AuditLandingComponent', () => {
  let component: AuditLandingComponent;
  let fixture: ComponentFixture<AuditLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
