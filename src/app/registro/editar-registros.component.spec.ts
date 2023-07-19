import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRegistrosComponent } from './editar-registros.component';

describe('EditarRegistrosComponent', () => {
  let component: EditarRegistrosComponent;
  let fixture: ComponentFixture<EditarRegistrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarRegistrosComponent]
    });
    fixture = TestBed.createComponent(EditarRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
