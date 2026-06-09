import { TestBed } from '@angular/core/testing';

import { AutentifikacijaGuard } from './autentifikacija-guard';

describe('autentifikacijaGuard', () => {
  let guard: AutentifikacijaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutentifikacijaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
