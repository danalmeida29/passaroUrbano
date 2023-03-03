import { TestBed } from '@angular/core/testing';

import { OrdemDeCompraService } from './ordem-de-compra.service';

describe('OrdemDeCompraService', () => {
  let service: OrdemDeCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdemDeCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
