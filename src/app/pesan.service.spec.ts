import { TestBed } from '@angular/core/testing';

import { PesanService } from './pesan.service';

describe('PesanService', () => {
  let service: PesanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
