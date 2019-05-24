import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { NoticelistDataSource } from './noticelist-datasource';
import { Notice } from '@app/entity/notice/notice.model';
import { Store } from '@ngrx/store';
import * as fromNotice from '../../entity/notice/notice.reducer';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';
@Component({
  selector: 'anms-noticelist',
  templateUrl: './noticelist.component.html',
  styleUrls: ['./noticelist.component.css']
})
export class NoticelistComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  dataSource: NoticelistDataSource;
  selection = new SelectionModel<Notice>(true, []);
  constructor(
    private router: Router,
    private store: Store<fromNotice.NoticeState>
  ) { }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'number', 'title', 'readCount'];

  ngOnInit() {
    this.dataSource = new NoticelistDataSource(
      this.paginator,
      this.sort,
      this.store
    );
  }
  @Input()
  NoticeData: Notice[];

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  checkboxLabel(row?: Notice): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${
      this.selection.isSelected(row) ? 'deselect' : 'select'
      } row ${row.id + 1}`;
  }

  alert(id: string) {
    console.log(id);
    this.router.navigate(['/noticedetail', id]);
  }

  // private navigate(product){
  //   this.router.navigate(['/participants', product]); //we can send product object as route param
  // }
}
