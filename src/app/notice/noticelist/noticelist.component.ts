import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { NoticelistDataSource } from './noticelist-datasource';

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

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title', 'content'];

  ngOnInit() {
    this.dataSource = new NoticelistDataSource(this.paginator, this.sort);
  }
  // @Input()
}
