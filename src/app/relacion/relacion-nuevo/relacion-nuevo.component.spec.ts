import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionNuevoComponent } from './relacion-nuevo.component';

describe('RelacionNuevoComponent', () => {
  let component: RelacionNuevoComponent;
  let fixture: ComponentFixture<RelacionNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelacionNuevoComponent]
    });
    fixture = TestBed.createComponent(RelacionNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
