import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { NoticeTableDataSource } from './notice-table-datasource';

@Component({
  selector: 'anms-notice-table',
  templateUrl: './notice-table.component.html',
  styleUrls: ['./notice-table.component.css']
})
export class NoticeTableComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;
  dataSource: NoticeTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new NoticeTableDataSource(this.paginator, this.sort);
  }
}
