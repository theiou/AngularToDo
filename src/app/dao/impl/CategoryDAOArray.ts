import {CategoryDAO} from "../interface/CategoryDAO";
import {Category} from "../../models/Category";
import {Observable, of} from "rxjs";
import {TestData} from "../../Data/TestData";

export class CategoryDAOArray implements CategoryDAO {
  add(obj: Category): Observable<Category> {
    // @ts-ignore
    return undefined;
  }

  delete(id: number): Observable<Category> {
    // @ts-ignore
    return undefined;
  }

  get(id: number): Observable<Category> {
    // @ts-ignore
    return undefined;
  }

  getAll(): Observable<Category[]> {
    return of(TestData.categories);
  }

  search(title: string): Observable<Category[]> {
    // @ts-ignore
    return undefined;
  }

  update(obj: Category): Observable<Category> {
    // @ts-ignore
    return undefined;
  }

}
