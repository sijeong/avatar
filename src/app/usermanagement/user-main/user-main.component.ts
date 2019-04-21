import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../entity/user/user.model';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { FakeService } from '@app/entity/fake.service';
import { FromNodeOptions } from 'bluebird';
import * as fromUser from '../../entity/user/user.reducer';
import { RequestUsers } from '@app/entity/user/user.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'anms-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMainComponent implements OnInit {
  users$: Observable<User[]> = this.store.pipe(select(fromUser.selectAllUsers));
  administrators$: Observable<User[]> = this.users$.pipe(
    map(users => users.filter(user => user.userType === 'Administrator'))
  );
  customers$: Observable<User[]> = this.users$.pipe(
    map(users => users.filter(user => user.userType === 'Customer'))
  );

  constructor(private store: Store<fromUser.UserState>) {}

  ngOnInit() {
    this.store.dispatch(new RequestUsers());
  }
}
