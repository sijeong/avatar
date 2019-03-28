import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiTestComponent } from '../../entity/api-test/api-test.component';
@Component({
  selector: 'anms-option-main',
  templateUrl: './option-main.component.html',
  styleUrls: ['./option-main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionMainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
