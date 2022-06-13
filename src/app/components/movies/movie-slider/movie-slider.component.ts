import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-slider',
  templateUrl: './movie-slider.component.html',
  styleUrls: ['./movie-slider.component.scss'],
})
export class MovieSliderComponent implements OnInit {
  movies!: any;
  imageBaseUrl = environment.images;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getNowPlayingMovie().subscribe((res) => {
      this.movies = res.slice(0, 5);
    });
  }
}
