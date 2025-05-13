import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Er403Component } from './er403.component';

describe('Er403Component', () => {
  let component: Er403Component;
  let fixture: ComponentFixture<Er403Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Er403Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Er403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
