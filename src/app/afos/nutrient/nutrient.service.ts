import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/service/base.service';
import {Nutrient} from '../../shared/model/nutrient';
import {Observable, of} from 'rxjs';
import {NUTRIENTS} from '../../shared/mock-data/mock-nutrients';
import {compare, SortColumn} from '../../shared/sortable-header.directive';

@Injectable({
  providedIn: 'root'
})
export class NutrientService extends BaseService<Nutrient>{
  sortColumn: "nutrinentGroup" | "id" | "code" | "name" | "";
  sortDirection: "asc" | "desc" | "";

  constructor() {
    super();
  }

  getEntities(): Observable<Nutrient[]> {
    return of(NUTRIENTS);
  }

  sort(countries: Nutrient[], column: SortColumn, direction: string): Nutrient[] {
    if (direction === '' || column === '') {
      return countries;
    } else {
      return [...countries].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }


}
