import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Notice } from './notice/notice.model';
import { Option } from './option/option.model';
import { User } from './user/user.model';

import * as faker from 'faker/locale/en_US';

@Injectable()
export class InMemWebService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo) {
    const getUsers = (count = faker.random.number(100)) => {
      const res = [];
      for (let i = 0; i < count; i++) {
        res.push({
          id: faker.random.uuid(),
          name: faker.name.firstName()
        });
      }

      return res;
    };

    const getOptions = (count = faker.random.number(100)) => {
      const res = [];
      for (let i = 0; i < count; i++) {
        res.push({
          id: faker.random.uuid(),
          name: faker.finance.accountName(),
          price: faker.finance.amount()
        });
      }

      return res;
    };

    const getNotices = (count = faker.random.number(100)) => {
      const res = [];
      for (let i = 0; i < count; i++) {
        res.push({
          id: faker.random.uuid(),
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs()
        });
      }
      return res;
    };

    const users: User[] = getUsers(faker.random.number(30));
    const options: Option[] = getOptions(faker.random.number(300));
    const notices: Notice[] = getNotices(faker.random.number(30));

    const db = { users, options, notices };

    let returnType = 'observable';

    if (reqInfo) {
      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
      if (body.clear === true) {
      }

      returnType = body.returnType || 'object';
    }
    switch (returnType) {
      case 'observable':
        return of(db).pipe(delay(10));
      default:
        return db;
    }
  }
}
