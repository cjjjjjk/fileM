import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XssScriptsListComponent } from './xss-scripts-list.component';

describe('XssScriptsListComponent', () => {
  let component: XssScriptsListComponent;
  let fixture: ComponentFixture<XssScriptsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [XssScriptsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XssScriptsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
