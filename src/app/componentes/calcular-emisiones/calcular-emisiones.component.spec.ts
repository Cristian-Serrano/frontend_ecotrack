import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularEmisionesComponent } from './calcular-emisiones.component';

describe('CalcularEmisionesComponent', () => {
  let component: CalcularEmisionesComponent;
  let fixture: ComponentFixture<CalcularEmisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcularEmisionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcularEmisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
