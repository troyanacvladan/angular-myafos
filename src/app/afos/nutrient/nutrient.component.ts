import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Nutrient} from '../../shared/model/nutrient';
import {NutrientService} from './nutrient.service';
import {SortableHeaderDirective, SortEvent,compare} from '../../shared/sortable-header.directive';
import {NUTRIENTS} from '../../shared/mock-data/mock-nutrients';

@Component({
  selector: 'app-nutrient',
  templateUrl: './nutrient.component.html',
  styleUrls: ['./nutrient.component.scss']
})
export class NutrientComponent implements OnInit {
  nutrients: Nutrient[] = NUTRIENTS;
  page: number = 1;
  readonly pageSize:number=5;
  @ViewChildren(SortableHeaderDirective) headers: QueryList<SortableHeaderDirective>;

  constructor(private nutrientService:NutrientService) { }

  updatePage(value:number){
    this.page = value;
    this.nutrients.sort()
  }

  ngOnInit(): void {
    //this.getNutrients();
  }

  getNutrients(): void {
    this.nutrientService.getEntities()
      .subscribe(nutrients => this.nutrients = nutrients);
  }

  onSort({column, direction}: SortEvent) {

    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.nutrients = NUTRIENTS;
    } else {
      this.nutrients = [...NUTRIENTS].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }

}
