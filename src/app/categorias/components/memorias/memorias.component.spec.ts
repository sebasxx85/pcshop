import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoriasComponent } from './memorias.component';

describe('MemoriasComponent', () => {
  let component: MemoriasComponent;
  let fixture: ComponentFixture<MemoriasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemoriasComponent]
    });
    fixture = TestBed.createComponent(MemoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
