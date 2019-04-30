import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Notice, cat1, cat2 } from './notice/notice.model';
import { Option } from './option/option.model';
import { User } from './user/user.model';

import * as faker from 'faker/locale/en_US';
import { Product } from './product/product.model';

@Injectable()
export class InMemWebService implements InMemoryDbService {
  createDb(reqInfo?: RequestInfo) {
    const userTypes: string[] = ['Administrator', 'Customer'];
    const getUsers = (count = faker.random.number(100)) => {
      const res = [];
      for (let i = 0; i < count; i++) {
        res.push({
          id: faker.random.uuid(),
          name: faker.name.firstName(),
          imgUrl: faker.image.avatar(),
          title: faker.company.bsAdjective(),
          description: faker.lorem.paragraphs(),
          userType: userTypes[faker.random.number(1)]
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
    // id: string;
    // number: number
    // title: string;
    // content: string;
    // modified: string;
    // view: number;
    // cat1: string;
    // cat2: string;
    const getNotices = (count = faker.random.number(100)) => {
      const res = [];
      let rnd = faker.random.number(3);
      for (let i = 0; i < count; i++) {

        res.push({
          id: faker.random.uuid(),
          number: i + 1,
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(),
          modified: faker.date.past(),
          cat1: cat1[rnd],
          cat2: cat2[rnd][faker.random.number(3)],
          readCount: faker.random.number(100)
        });
      }
      return res;
    };
    const productCategory = ['food', 'goods'];

    const getProducts = (count = faker.random.number(100)) => {
      const res = [];
      for (let i = 0; i < count; i++) {
        let temp = {
          id: faker.random.uuid(),
          name: faker.lorem.word(),
          description: faker.lorem.paragraph(),
          category: productCategory[faker.random.number(1)]
        };
        // let addOn = 'imgUrl';
        // temp[addOn] =
        //   temp.category === 'food' ? faker.image.food() : faker.image.fashion();
        res.push();
      }
      return res;
    };

    const users: User[] = getUsers(faker.random.number(30));
    const options: Option[] = getOptions(faker.random.number(300));
    const notices: Notice[] = getNotices(faker.random.number(1000));
    const products: Product[] = getProducts(faker.random.number(100));

    const db = { users, options, notices, products };

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
