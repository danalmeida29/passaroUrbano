import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdemDeCompraComponent } from './ordem-de-compra.component';

describe('OrdemDeCompraComponent', () => {
  let component: OrdemDeCompraComponent;
  let fixture: ComponentFixture<OrdemDeCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdemDeCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemDeCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
