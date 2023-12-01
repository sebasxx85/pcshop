import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarProductosComponent } from './mostrar-productos.component';

describe('MostrarProductosComponent', () => {
  let component: MostrarProductosComponent;
  let fixture: ComponentFixture<MostrarProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarProductosComponent]
    });
    fixture = TestBed.createComponent(MostrarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
