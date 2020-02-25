import { TestBed } from '@angular/core/testing';

import { TesteApiService } from './teste-api.service';

describe('TesteApiService', () => {
  let service: TesteApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesteApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
