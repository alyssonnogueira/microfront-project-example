import { TestBed } from '@angular/core/testing';

import { ContaService } from './conta.service';

describe('ContaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContaService = TestBed.get(ContaService);
    expect(service).toBeTruthy();
  });
});
