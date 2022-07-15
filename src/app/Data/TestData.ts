import {Category} from "../models/Category";
import {Priority} from "../models/Priority";
import {Task} from "../models/Task";


export class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Семья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Еда'},
    {id: 6, title: 'Финансы'}
  ]

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#e5e5e5'},
    {id: 2, title: 'Средний', color: '#85D1B2'},
    {id: 3, title: 'Высокий', color: '#F1828D'}
  ]

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Что-то сделать',
      priority: TestData.priorities[1],
      completed: false,
      category: TestData.categories[4]
    },
    {
      id: 2,
      title: 'Что-то сделать2',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[5]
    },
    {
      id: 3,
      title: 'Что-то сделать3',
      priority: TestData.priorities[0],
      completed: true,
      category: TestData.categories[2]
    },
    {
      id: 4,
      title: 'Что-то сделать4',
      priority: TestData.priorities[1],
      completed: true,
      category: TestData.categories[0]
    },
    {
      id: 5,
      title: 'Что-то сделать5',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[2]
    },
    {
      id: 6,
      title: 'Что-то сделать6',
      priority: TestData.priorities[2],
      completed: true,
      category: TestData.categories[4]
    }
  ]
}
