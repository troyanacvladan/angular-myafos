import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  constructor() { }

  abstract getEntities(): Observable<T[]>;
}
