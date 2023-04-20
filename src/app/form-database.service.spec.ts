import { TestBed } from '@angular/core/testing';

import { FormDatabaseService } from './form-database.service';

describe('FormDatabaseService', () => {
  let service: FormDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
