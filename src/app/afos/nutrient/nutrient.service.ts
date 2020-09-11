import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/service/base.service';
import {Nutrient} from '../../shared/model/nutrient';
import {Observable, of} from 'rxjs';
import {NUTRIENTS} from '../../shared/mock-data/mock-nutrients';

@Injectable({
  providedIn: 'root'
})
export class NutrientService extends BaseService<Nutrient>{

  constructor() {
    super();
  }

  getEntities(): Observable<Nutrient[]> {
    return of(NUTRIENTS);
  }
}
