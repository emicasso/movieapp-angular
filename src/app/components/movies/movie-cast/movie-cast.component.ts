import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.scss']
})
export class MovieCastComponent implements OnInit {
  cast!: any;
  imageBaseUrl = environment.images;

  constructor(
    private movieService: MovieService,
    private activatadRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatadRoute.params.subscribe((params: any) => {
      this.movieService.getMovieCast(params.id).subscribe((res) => {
        this.cast = res;
      });
    });
  }
}
