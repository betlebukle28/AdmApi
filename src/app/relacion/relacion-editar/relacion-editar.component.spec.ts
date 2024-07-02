import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionEditarComponent } from './relacion-editar.component';

describe('RelacionEditarComponent', () => {
  let component: RelacionEditarComponent;
  let fixture: ComponentFixture<RelacionEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelacionEditarComponent]
    });
    fixture = TestBed.createComponent(RelacionEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
