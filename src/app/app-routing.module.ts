import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './views/results/movies/movies.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'results'},
  {path: 'results', component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
