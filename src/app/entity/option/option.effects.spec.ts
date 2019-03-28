import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { OptionEffects } from './option.effects';

describe('OptionEffects', () => {
  let actions$: Observable<any>;
  let effects: OptionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(OptionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
