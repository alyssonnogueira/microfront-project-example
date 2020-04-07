import { TestBed } from '@angular/core/testing';

import { TransacaoService } from './transacao.service';

describe('LancementoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransacaoService = TestBed.get(TransacaoService);
    expect(service).toBeTruthy();
  });
});
