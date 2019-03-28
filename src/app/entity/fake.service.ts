import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { User } from './user/user.model';
import { Option } from './option/option.model';
import { Notice } from './notice/notice.model';

@Injectable({
  providedIn: 'root'
})
export class FakeService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('api/users').pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getOptions(): Observable<Option[]> {
    return this.http.get<Option[]>('api/options').pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  getNotices(): Observable<Notice[]> {
    return this.http.get<Notice[]>('api/notices').pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }
}
