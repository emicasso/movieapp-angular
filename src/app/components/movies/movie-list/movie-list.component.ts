import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies!: any[];
  page = 1;
  count: number = 1;
  totalpage: number = 1;
  imageBaseUrl = environment.images;

  constructor(
    private movieService: MovieService,
    private activatadRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listMovies();
  }

  listMovies(): void {
    this.activatadRoute.queryParams.subscribe((params: any) => {
      this.movieService
        .getTopRatedMovie(this.page, params.q)
        .subscribe((response) => {
          this.movies = response.results;
          this.totalpage = response.total_page;
        });
    });
  }

  onPageDataChange(event: any) {
    this.page = event;
    this.listMovies();
  }
}
