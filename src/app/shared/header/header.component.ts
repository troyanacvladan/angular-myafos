import {Component, OnInit, Output, EventEmitter} from '@angular/core';

interface Tabs {
  name: string,
  path: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  readonly tabs:Tabs[]=[
    {name:'Dashboard', path:'home'},
    {name:'Nutrients', path:'nutrient'},
    {name:'Ingredients', path:'home'},
    {name:'About', path:'home'},
  ];

  @Output() tabNameEvent = new EventEmitter<string>();

  setTabName(value: string) {
    this.tabNameEvent.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
