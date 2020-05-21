import { TestBed } from '@angular/core/testing';

import { ProtegerGuard } from './proteger.guard';

describe('ProtegerGuard', () => {
  let guard: ProtegerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtegerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
