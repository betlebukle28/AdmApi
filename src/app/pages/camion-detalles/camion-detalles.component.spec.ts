import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamionDetallesComponent } from './camion-detalles.component';

describe('CamionDetallesComponent', () => {
  let component: CamionDetallesComponent;
  let fixture: ComponentFixture<CamionDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamionDetallesComponent]
    });
    fixture = TestBed.createComponent(CamionDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
