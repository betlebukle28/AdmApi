import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionDetalleComponent } from './relacion-detalle.component';

describe('RelacionDetalleComponent', () => {
  let component: RelacionDetalleComponent;
  let fixture: ComponentFixture<RelacionDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelacionDetalleComponent]
    });
    fixture = TestBed.createComponent(RelacionDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
