import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './afos/home/home.component';
import {NutrientComponent} from './afos/nutrient/nutrient.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nutrient', component: NutrientComponent },
  { path: '**', redirectTo:'home', pathMatch: 'full' } // Default route (404)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
