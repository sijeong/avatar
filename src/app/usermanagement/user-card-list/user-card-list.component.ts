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

  constructor() {}

  ngOnInit() {}
}
