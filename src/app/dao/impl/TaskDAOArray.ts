import {Task} from "../../models/Task";
import {TaskDAO} from "../interface/TaskDAO";
import {Observable, of} from "rxjs";
import {Category} from "../../models/Category";
import {Priority} from "../../models/Priority";
import {TestData} from "../../Data/TestData";

export class TaskDAOArray implements TaskDAO {

  getAll(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  add(obj: Task): Observable<Task> {
    // @ts-ignore
    return undefined;
  }


  delete(id: number): Observable<Task> {
    // @ts-ignore
    return undefined;
  }


  get(id: number): Observable<Task> {
    // @ts-ignore
    return undefined;
  }


  getCompletedCountInCategory(category: Category): Observable<number> {
    // @ts-ignore
    return undefined;
  }

  getTotalCount(): Observable<number> {
    // @ts-ignore
    return undefined;
  }

  getTotalCountInCategory(category: Category): Observable<number> {
    // @ts-ignore
    return undefined;
  }

  getUncompletedCountInCategory(category: Category): Observable<number> {
    // @ts-ignore
    return undefined;
  }


  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]> {
    // @ts-ignore
    return undefined;
  }


  update(obj: Task): Observable<Task> {
    // @ts-ignore
    return undefined;
  }

}
