import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionarEditarComponent } from './relacionar-editar.component';

describe('RelacionarEditarComponent', () => {
  let component: RelacionarEditarComponent;
  let fixture: ComponentFixture<RelacionarEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelacionarEditarComponent]
    });
    fixture = TestBed.createComponent(RelacionarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
