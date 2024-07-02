import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorEditarComponent } from './conductor-editar.component';

describe('ConductorEditarComponent', () => {
  let component: ConductorEditarComponent;
  let fixture: ComponentFixture<ConductorEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConductorEditarComponent]
    });
    fixture = TestBed.createComponent(ConductorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
