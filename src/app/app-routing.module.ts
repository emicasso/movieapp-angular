import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movies/movie-details/movie-details.component';
import { MovieListComponent } from './components/movies/movie-list/movie-list.component';
import { MovieSliderComponent } from './components/movies/movie-slider/movie-slider.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies'
  },  
  {
    path: 'movies',
    component: MovieListComponent,
    children: [
      {path:'slider', component: MovieSliderComponent}
    ]
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
