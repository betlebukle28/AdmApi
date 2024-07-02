import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamionEditarComponent } from './camion-editar.component';

describe('CamionEditarComponent', () => {
  let component: CamionEditarComponent;
  let fixture: ComponentFixture<CamionEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamionEditarComponent]
    });
    fixture = TestBed.createComponent(CamionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
