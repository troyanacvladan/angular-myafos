import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NutrientComponent } from './afos/nutrient/nutrient.component';
import { HomeComponent } from './afos/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { ContentComponent } from './shared/content/content.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { AddNutrientComponent } from './afos/nutrient/add-nutrient/add-nutrient.component';
import { SortableHeaderDirective } from './shared/sortable-header.directive';


@NgModule({
  declarations: [
    AppComponent,
    NutrientComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    PaginationComponent,
    AddNutrientComponent,
    SortableHeaderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
