import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesoriosCelComponent } from './accesorios-cel.component';

describe('AccesoriosCelComponent', () => {
  let component: AccesoriosCelComponent;
  let fixture: ComponentFixture<AccesoriosCelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccesoriosCelComponent]
    });
    fixture = TestBed.createComponent(AccesoriosCelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
