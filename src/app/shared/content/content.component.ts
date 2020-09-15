import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  currentTab:string;

  constructor() { }

  ngOnInit(): void {
  }

  addCurrTabName(value: string){
    this.currentTab = value;
  }

}
