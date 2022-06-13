import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie!: any;
  imageBaseUrl = environment.images;

  constructor(
    private movieService: MovieService,
    private activatadRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatadRoute.params.subscribe((params: any) => {
      this.movieService.getMovieDetails(params.id).subscribe((res) => {
        this.movie = res;
      });
    });
  }

  backHome() {
    this.router.navigate(['/movies']);
  }
}
