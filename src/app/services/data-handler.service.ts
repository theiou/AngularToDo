import { Injectable } from '@angular/core';
import { TestData } from '../Data/TestData';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getCategories(): Category[]{
    return TestData.categories;
  }

  
}
