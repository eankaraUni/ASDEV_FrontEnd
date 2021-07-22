import { TestBed } from '@angular/core/testing';

import { ServerHService } from './server-h.service';

describe('ServerHService', () => {
  let service: ServerHService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerHService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
