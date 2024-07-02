import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionarHomeComponent } from './relacionar-home.component';

describe('RelacionarHomeComponent', () => {
  let component: RelacionarHomeComponent;
  let fixture: ComponentFixture<RelacionarHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelacionarHomeComponent]
    });
    fixture = TestBed.createComponent(RelacionarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
