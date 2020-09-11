import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './afos/home/home.component';
import {NutrientComponent} from './afos/nutrient/nutrient.component';

const routes: Routes = [
 // {path: '**', redirectTo: '/home'}, // Default route (404)
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'nutrient', component: NutrientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
