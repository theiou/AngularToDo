import {Injectable} from '@angular/core';
import {TestData} from '../Data/TestData';
import {Category} from '../models/Category';
import {Task} from '../models/Task';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categorySubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
  }

  fillTasks() {
    this.categorySubject.next(TestData.tasks);
  }

  fillCategories() {
    this.categorySubject.next(TestData.categories);
  }

  fillTasksByCategory(category: Category){
    const tasks = TestData.tasks.filter(value => value.category === category);
    this.tasksSubject.next(tasks);
  }
}

