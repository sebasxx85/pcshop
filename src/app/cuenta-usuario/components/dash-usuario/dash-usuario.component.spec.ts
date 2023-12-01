import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashUsuarioComponent } from './dash-usuario.component';

describe('DashUsuarioComponent', () => {
  let component: DashUsuarioComponent;
  let fixture: ComponentFixture<DashUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashUsuarioComponent]
    });
    fixture = TestBed.createComponent(DashUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
