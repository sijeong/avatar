import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';

import { NoticelistComponent } from './noticelist.component';

describe('NoticelistComponent', () => {
  let component: NoticelistComponent;
  let fixture: ComponentFixture<NoticelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoticelistComponent],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
