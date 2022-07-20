import {Injectable} from '@angular/core';
import {TestData} from '../Data/TestData';
import {Category} from '../models/Category';
import {Task} from '../models/Task';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {TaskDAOArray} from "../dao/impl/TaskDAOArray";
import {CategoryDAOArray} from "../dao/impl/CategoryDAOArray";
import {Priority} from "../models/Priority";

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

  searchTasksByCategory(category: Category): Observable<Task[]>{
    return this.taskDAOArray.search(category);
  }

}

