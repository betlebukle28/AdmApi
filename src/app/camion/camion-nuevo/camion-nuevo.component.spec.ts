import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamionNuevoComponent } from './camion-nuevo.component';

describe('CamionNuevoComponent', () => {
  let component: CamionNuevoComponent;
  let fixture: ComponentFixture<CamionNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CamionNuevoComponent]
    });
    fixture = TestBed.createComponent(CamionNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
