import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorConsultaComponent } from './conductor-consulta.component';

describe('ConductorConsultaComponent', () => {
  let component: ConductorConsultaComponent;
  let fixture: ComponentFixture<ConductorConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConductorConsultaComponent]
    });
    fixture = TestBed.createComponent(ConductorConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
