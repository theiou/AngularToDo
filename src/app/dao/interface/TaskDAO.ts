import {CommonDAO} from "./CommonDAO";
import {Category} from "../../models/Category";
import {Priority} from "../../models/Priority";
import {Observable} from "rxjs";
import {Task} from "../../models/Task";

export interface TaskDAO extends CommonDAO<Task> {
  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]>;

  getCompletedCountInCategory(category: Category): Observable<number>;

  getUncompletedCountInCategory(category: Category): Observable<number>;

  getTotalCountInCategory(category: Category): Observable<number>;

  getTotalCount(): Observable<number>;
}
