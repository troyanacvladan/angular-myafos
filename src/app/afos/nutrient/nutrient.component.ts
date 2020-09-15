import { Component, OnInit } from '@angular/core';
import {Nutrient} from '../../shared/model/nutrient';
import {NutrientService} from './nutrient.service';

@Component({
  selector: 'app-nutrient',
  templateUrl: './nutrient.component.html',
  styleUrls: ['./nutrient.component.scss']
})
export class NutrientComponent implements OnInit {
  nutrients: Nutrient[] = [];
  page: number = 1;
  readonly pageSize:number=5;

  constructor(private nutrientService:NutrientService) { }

  updatePage(value:number){
    this.page = value;
  }

  ngOnInit(): void {
    this.getNutrients();
  }

  getNutrients(): void {
    this.nutrientService.getEntities()
      .subscribe(nutrients => this.nutrients = nutrients);
  }

}
