import { TestBed } from '@angular/core/testing';

import { ListaItensService } from './lista-itens.service';

describe('ListaItensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaItensService = TestBed.get(ListaItensService);
    expect(service).toBeTruthy();
  });
});
