import { TestBed } from '@angular/core/testing';
import { MenuApiService } from './menu-api.service';

describe('JobsApiService', () => {
  let service: MenuApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
