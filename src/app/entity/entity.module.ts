import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './user/user.reducer';
import * as fromOption from './option/option.reducer';
import * as fromNotice from './notice/notice.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user/user.effects';
import { CoreModule } from '../core';

import { NoticeEffects } from './notice/notice.effects';

import { OptionEffects } from './option/option.effects';

import { ApiTestComponent } from './api-test/api-test.component';

import * as fromState from './reducers';
import { NoticeComponent } from './notice/notice/notice.component';
import { OptionComponent } from './option/option/option.component';

@NgModule({
  declarations: [ApiTestComponent, NoticeComponent, OptionComponent],
  imports: [
    CommonModule,
    CoreModule,
    StoreModule.forFeature('user', fromUser.reducer),
    StoreModule.forFeature('option', fromOption.optionReducer),
    StoreModule.forFeature('notice', fromNotice.reducer),
    EffectsModule.forFeature([UserEffects, NoticeEffects, OptionEffects])
    // StoreModule.forFeature('state', fromState.reducers, { metaReducers: fromState.metaReducers })
  ],
  exports: [ApiTestComponent]
})
export class EntityModule {}
