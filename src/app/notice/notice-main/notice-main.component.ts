import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiTestComponent } from '../../entity/api-test/api-test.component';
import { Observable } from 'rxjs';
import { Notice } from '@app/entity/notice/notice.model';
import { FakeService } from '@app/entity/fake.service';

@Component({
  selector: 'anms-notice-main',
  templateUrl: './notice-main.component.html',
  styleUrls: ['./notice-main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoticeMainComponent implements OnInit {
  notice$: Observable<Notice[]>;
  constructor(private svc: FakeService) {}

  ngOnInit() {
    this.notice$ = this.svc.getNotices();
  }
}
