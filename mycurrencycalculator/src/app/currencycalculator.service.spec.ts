import { TestBed } from '@angular/core/testing';

import { CurrencycalculatorService } from './currencycalculator.service';

describe('CurrencycalculatorService', () => {
  let service: CurrencycalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencycalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
