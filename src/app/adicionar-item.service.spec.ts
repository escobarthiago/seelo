import { TestBed } from '@angular/core/testing';

import { AdicionarItemService } from './adicionar-item.service';

describe('AdicionarItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdicionarItemService = TestBed.get(AdicionarItemService);
    expect(service).toBeTruthy();
  });
});
