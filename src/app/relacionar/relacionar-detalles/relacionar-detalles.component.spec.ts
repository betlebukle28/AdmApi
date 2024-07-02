import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionarDetallesComponent } from './relacionar-detalles.component';

describe('RelacionarDetallesComponent', () => {
  let component: RelacionarDetallesComponent;
  let fixture: ComponentFixture<RelacionarDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelacionarDetallesComponent]
    });
    fixture = TestBed.createComponent(RelacionarDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
