import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorDetalleComponent } from './conductor-detalle.component';

describe('ConductorDetalleComponent', () => {
  let component: ConductorDetalleComponent;
  let fixture: ComponentFixture<ConductorDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConductorDetalleComponent]
    });
    fixture = TestBed.createComponent(ConductorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
