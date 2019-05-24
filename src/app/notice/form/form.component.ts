import { Component, Input, ChangeDetectionStrategy, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Notice, cat1, cat2 } from '@app/entity/notice/notice.model';
import { Observable, Subscription } from 'rxjs';
import * as fromNotice from '../../entity/notice/notice.reducer';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as BalloonBlockEditor from '@ckeditor/ckeditor5-build-balloon-block';
import { DatePipe } from '@angular/common';
// import { Subscription } from 'rxjs/Subscription'
@Component({
  selector: 'anms-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
    this.subscription = this.notice$.subscribe(n =>
      this.addressForm.patchValue({
        subject: n.title,
        content: n.content,
        // date: new DatePipe('en').transform(n.modified),
        date: n.modified,
        count: n.readCount,
        cat1: n.cat1,
        cat2: n.cat2
      })
    );
  }
  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
    this.subscription.unsubscribe();
  }
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
    { name: 'animal', abbreviation: 'animal' },
    { name: 'plant', abbreviation: 'plant' },
    { name: 'virus', abbreviation: 'virus' }
  ];
  cat2s = [
    { name: 'tiger', abbreviation: 'tiger' },
    { name: 'lion', abbreviation: 'lion' }
  ];

  constructor(
    private fb: FormBuilder,
    private store: Store<fromNotice.NoticeState>,
    // private datePipe: DatePipe
  ) {

  }

  onSubmit() {
    alert('Thanks!');
  }
}
