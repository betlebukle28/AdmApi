import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionarNuevoComponent } from './relacionar-nuevo.component';

describe('RelacionarNuevoComponent', () => {
  let component: RelacionarNuevoComponent;
  let fixture: ComponentFixture<RelacionarNuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelacionarNuevoComponent]
    });
    fixture = TestBed.createComponent(RelacionarNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
