import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getTopRatedMovie(page: number, searchMovie: string): Observable<any> {
    const type = searchMovie ? 'search/movie' : 'discover/movie';
    return this.http
      .get(`${environment.baseUrl}/${type}`,
        {
          params: {
            api_key: environment.apiKey,
            language: 'es',
            page: page,
            query: searchMovie,
          },
        }
      )
      .pipe(map((resp: any) => resp));
  }

  getNowPlayingMovie(page = 1): Observable<any> {
    return this.http
      .get(`${environment.baseUrl}/movie/now_playing`, {
        params: {
          api_key: environment.apiKey,
          language: 'es',
          page: page,
        },
      })
      .pipe(map((resp: any) => resp.results));
  }

  getMovieDetails(id: string, language = 'es'): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/movie/${id}?api_key=${environment.apiKey}&language=${language}`
    );
  }

  getMovieCast(id: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/movie/${id}/credits`, {
      params: {
        api_key: environment.apiKey,
        language: 'es',
      },
    })
    .pipe(map((resp: any) => resp.cast));
  }
}
