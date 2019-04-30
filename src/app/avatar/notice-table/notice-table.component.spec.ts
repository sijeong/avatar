import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';

import { NoticeTableComponent } from './notice-table.component';

describe('NoticeTableComponent', () => {
  let component: NoticeTableComponent;
  let fixture: ComponentFixture<NoticeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoticeTableComponent],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
