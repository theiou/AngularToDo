import {Observable} from "rxjs";

export interface CommonDAO<T> {

  add(obj: T): Observable<T>;

  get(id: number): Observable<T>;

  getAll(): Observable<T[]>;

  update(obj: T): Observable<T>;

  delete(id: number): Observable<T>;
}
