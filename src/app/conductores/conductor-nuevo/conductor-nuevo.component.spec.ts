import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorNuevoComponent } from './conductor-nuevo.component';

describe('ConductorNuevoComponent', () => {
  let component: ConductorNuevoComponent;
  let fixture: ComponentFixture<ConductorNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConductorNuevoComponent]
    });
    fixture = TestBed.createComponent(ConductorNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
