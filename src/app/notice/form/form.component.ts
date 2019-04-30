import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Notice } from '@app/entity/notice/notice.model';
import { Observable } from 'rxjs';
import * as fromNotice from '../../entity/notice/notice.reducer';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';

@Component({
  selector: 'anms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  notice: Notice;
  notice$: Observable<Notice> = this.store.pipe(
    select(fromNotice.selectSelectedNotice)
  );
  Editor = BalloonBlockEditor;
  addressForm = this.fb.group({
    cat1: [null, Validators.required],
    cat2: null,
    subject: null,
    date: null,
    count: null,
    content: null
  });

  hasUnitNumber = false;
  cat1s = [
    { name: 'cat1sub1', abbreviation: 'c1s1' },
    { name: 'cat1sub2', abbreviation: 'c1s2' }
  ];
  cat2s = [
    { name: 'cat2sub1', abbreviation: 'c2s1' },
    { name: 'cat2sub2', abbreviation: 'c2s2' }
  ];

  constructor(
    private fb: FormBuilder,
    private store: Store<fromNotice.NoticeState>
  ) {
    this.notice$.subscribe(n =>
      this.addressForm.patchValue({
        subject: n.title,
        content: n.content
      })
    );
  }

  onSubmit() {
    alert('Thanks!');
  }
}
