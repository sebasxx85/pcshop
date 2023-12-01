import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavShaComponent } from './nav-sha.component';

describe('NavShaComponent', () => {
  let component: NavShaComponent;
  let fixture: ComponentFixture<NavShaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavShaComponent]
    });
    fixture = TestBed.createComponent(NavShaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
