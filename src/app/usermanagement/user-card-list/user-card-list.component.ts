import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../entity/user/user.model';
@Component({
  selector: 'anms-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.css']
})
export class UserCardListComponent implements OnInit {
  @Input()
  users: User[];
  public cardList: CardInterface[] = []
  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 10; i++) {
      this.cardList.push({
        imgSrc: 'http://via.placeholder.com/300',
        title: 'Card No. ' + 1,
        description: 'Angular Flex Layout provides a sophisticated layout API using FlexBox CSS + mediaQuery.\
        This module provides Angular developers with component layout features using a custom Layout API, \
        mediaQuery observables, and injected DOM flexbox-2016 css stylings.'
      })
    }
  }
}
export interface CardInterface {
  imgSrc: string;
  title: string;
  description: string;

}