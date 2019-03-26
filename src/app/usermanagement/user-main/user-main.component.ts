import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../entity/user/user.model';

@Component({
  selector: 'anms-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
