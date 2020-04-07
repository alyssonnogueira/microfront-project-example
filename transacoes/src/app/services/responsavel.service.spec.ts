import { TestBed } from '@angular/core/testing';

import { ResponsavelService } from './responsavel.service';

describe('ResponsavelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResponsavelService = TestBed.get(ResponsavelService);
    expect(service).toBeTruthy();
  });
});
