import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { NoticeEffects } from './notice.effects';

describe('NoticeEffects', () => {
  let actions$: Observable<any>;
  let effects: NoticeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticeEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(NoticeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
