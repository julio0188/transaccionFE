import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoRegistrosComponent } from './nuevo-registros.component';

describe('NuevoRegistrosComponent', () => {
  let component: NuevoRegistrosComponent;
  let fixture: ComponentFixture<NuevoRegistrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoRegistrosComponent]
    });
    fixture = TestBed.createComponent(NuevoRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
