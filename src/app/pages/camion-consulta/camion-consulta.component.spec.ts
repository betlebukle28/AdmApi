import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamionConsultaComponent } from './camion-consulta.component';

describe('CamionConsultaComponent', () => {
  let component: CamionConsultaComponent;
  let fixture: ComponentFixture<CamionConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamionConsultaComponent]
    });
    fixture = TestBed.createComponent(CamionConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
