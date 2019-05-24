import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

import { Notice } from '../../entity/notice/notice.model';
import { NoticeMainComponent } from '../notice-main/notice-main.component';
import { select, Store } from '@ngrx/store';
import * as fromNotice from '../../entity/notice/notice.reducer';
import { RequestNotices } from '@app/entity/notice/notice.actions';
// TODO: Replace this with your own data model type
// export interface NoticelistItem {
//   name: string;
//   id: number;
// }

// TODO: replace this with real data from your application
// const notice$: Observable<Notice[]> = this.store.pipe(
//   select(fromNotice.selectAllNotices)
// );
// const EXAMPLE_DATA: Notice[] = [
//   { id: '1', title: 'Hydrogen', content: '' },
//   { id: '2', title: 'Helium', content: '' },
//   { id: '3', title: 'Lithium', content: '' }
// ];

/**
 * Data source for the Noticelist view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class NoticelistDataSource extends DataSource<Notice> {
  data: Notice[] = [];
  notice$: Observable<Notice[]> = this.store.pipe(
    select(fromNotice.selectAllNotices)
  );

  constructor(
    private paginator: MatPaginator,
    private sort: MatSort,
    private store: Store<fromNotice.NoticeState>
  ) {
    super();
    this.store.dispatch(new RequestNotices());
    this.notice$.subscribe(d => (this.data = d));
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Notice[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      // observableOf(this.data),
      this.notice$,
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;
    // this.paginator.length = this.notice$..length;

    return merge(...dataMutations).pipe(
      map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      })
    );
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Notice[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);

    // here to transform!!!!!!!!!!!!
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Notice[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name':
          return compare(a.title, b.title, isAsc);
        case 'id':
          return compare(+a.id, +b.id, isAsc);
        default:
          return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
