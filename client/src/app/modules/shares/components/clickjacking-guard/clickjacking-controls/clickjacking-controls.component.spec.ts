import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickjackingControlsComponent } from './clickjacking-controls.component';

describe('ClickjackingControlsComponent', () => {
  let component: ClickjackingControlsComponent;
  let fixture: ComponentFixture<ClickjackingControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClickjackingControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickjackingControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
