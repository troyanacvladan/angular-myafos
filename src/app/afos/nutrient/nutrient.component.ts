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

  constructor(private nutrientService:NutrientService) { }

  ngOnInit(): void {
    this.getNutrients();
  }

  getNutrients(): void {
    this.nutrientService.getEntities()
      .subscribe(nutrients => this.nutrients = nutrients);
  }

}
