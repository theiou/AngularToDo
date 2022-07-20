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
    return undefined;
  }


  delete(id: number): Observable<Task> {
    return undefined;
  }


  get(id: number): Observable<Task> {
    return undefined;
  }


  getCompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getTotalCount(): Observable<number> {
    return undefined;
  }

  getTotalCountInCategory(category: Category): Observable<number> {
    return undefined;
  }

  getUncompletedCountInCategory(category: Category): Observable<number> {
    return undefined;
  }


  search(category: Category): Observable<Task[]> {
    return of(this.searchTasks(category));
  }

  private searchTasks(category: Category): Task[]{
    let correctTasks = TestData.tasks;
    if (category != null) {
      correctTasks = correctTasks.filter(task => task.category === category)
    }
    return correctTasks;

  }


  update(obj: Task): Observable<Task> {
    return undefined;
  }

}
