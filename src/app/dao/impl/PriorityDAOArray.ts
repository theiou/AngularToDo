import {PriorityDAO} from "../interface/PriorityDAO";
import {Priority} from "../../models/Priority";
import {Observable} from "rxjs";

export class PriorityDAOArray implements PriorityDAO {
  add(obj: Priority): Observable<Priority> {
    // @ts-ignore
    return undefined;
  }

  delete(id: number): Observable<Priority> {
    // @ts-ignore
    return undefined;
  }

  get(id: number): Observable<Priority> {
    // @ts-ignore
    return undefined;
  }

  getAll(): Observable<Priority[]> {
    // @ts-ignore
    return undefined;
  }

  update(obj: Priority): Observable<Priority> {
    // @ts-ignore
    return undefined;
  }

}
