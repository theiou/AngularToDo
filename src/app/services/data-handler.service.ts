import {Injectable} from '@angular/core';
import {TestData} from '../Data/TestData';
import {Category} from '../models/Category';
import {Task} from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {
  }

  getCategories(): Category[] {
    return TestData.categories;
  }

  getTasks(): Task[] {
    return TestData.tasks;
  }
}
