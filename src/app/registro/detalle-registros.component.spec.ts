import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRegistrosComponent } from './detalle-registros.component';

describe('DetalleRegistrosComponent', () => {
  let component: DetalleRegistrosComponent;
  let fixture: ComponentFixture<DetalleRegistrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleRegistrosComponent]
    });
    fixture = TestBed.createComponent(DetalleRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
