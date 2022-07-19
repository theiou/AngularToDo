import {Injectable} from '@angular/core';
import {TestData} from '../Data/TestData';
import {Category} from '../models/Category';
import {Task} from '../models/Task';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {TaskDAOArray} from "../dao/impl/TaskDAOArray";
import {CategoryDAOArray} from "../dao/impl/CategoryDAOArray";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {
  private taskDAOArray = new TaskDAOArray();
  private categoryDAOArray = new CategoryDAOArray();

  constructor() {
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDAOArray.getAll();
  }

  getAllCategories(): Observable<Category[]>{
    return this.categoryDAOArray.getAll();
  }

}

