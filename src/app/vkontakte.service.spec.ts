import { TestBed, inject } from '@angular/core/testing';

import { VkontakteService } from './vkontakte.service';

describe('VkontakteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VkontakteService]
    });
  });

  it('should be created', inject([VkontakteService], (service: VkontakteService) => {
    expect(service).toBeTruthy();
  }));
});
