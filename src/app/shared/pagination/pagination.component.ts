import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Nutrient} from '../model/nutrient';
import {NUTRIENTS} from '../mock-data/mock-nutrients';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() pageEvent = new EventEmitter<number>();
  page:number = 1;
  @Input() pageSize:number;
  @Input() collectionSize:number;
  paginationPages:number[]=[];

  constructor() {
    //this.refreshCountries();
  }
/*
  refreshCountries() {
    this.tableData = NUTRIENTS
      .map((data, i) => ({id: i, ...data}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
*/
  ngOnInit(): void {
    var i:number;
    var size = ((this.collectionSize / this.pageSize) >> 0) + 1;

    for(i=1;i<=size;i++){
      this.paginationPages.push(i);
    }
  }

}
