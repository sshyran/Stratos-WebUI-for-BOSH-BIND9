import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserEndpointsEnabled } from 'frontend/packages/store/src/types/auth.types';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { GeneralEntityAppState } from '../../../../store/src/app-state';
import { selectSessionData } from '../../../../store/src/reducers/auth.reducer';

@Injectable()
export class SessionService {

  constructor(private store: Store<GeneralEntityAppState>) { }

  isTechPreview(): Observable<boolean> {
    return this.store.select(selectSessionData()).pipe(
      first(),
      map(sessionData => sessionData.config.enableTechPreview || false)
    );
  }

  userEndpointsEnabled(): Observable<boolean> {
    return this.store.select(selectSessionData()).pipe(
      first(),
      map(sessionData => sessionData && sessionData.config.UserEndpointsEnabled === UserEndpointsEnabled.ENABLED)
    );
  }

  userEndpointsNotDisabled(): Observable<boolean> {
    return this.store.select(selectSessionData()).pipe(
      first(),
      map(sessionData => sessionData && sessionData.config.UserEndpointsEnabled !== UserEndpointsEnabled.DISABLED)
    );
  }
}
