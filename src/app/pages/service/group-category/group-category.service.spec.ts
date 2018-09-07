import { TestBed, inject } from '@angular/core/testing';

import { GroupCategoryService } from './group-category.service';

describe('GroupCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupCategoryService]
    });
  });

  it('should be created', inject([GroupCategoryService], (service: GroupCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
