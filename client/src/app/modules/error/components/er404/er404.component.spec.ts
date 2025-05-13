import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Er404Component } from './er404.component';

describe('Er404Component', () => {
  let component: Er404Component;
  let fixture: ComponentFixture<Er404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Er404Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Er404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
