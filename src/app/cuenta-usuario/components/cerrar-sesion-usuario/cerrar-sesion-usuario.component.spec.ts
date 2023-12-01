import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarSesionUsuarioComponent } from './cerrar-sesion-usuario.component';

describe('CerrarSesionUsuarioComponent', () => {
  let component: CerrarSesionUsuarioComponent;
  let fixture: ComponentFixture<CerrarSesionUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CerrarSesionUsuarioComponent]
    });
    fixture = TestBed.createComponent(CerrarSesionUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
