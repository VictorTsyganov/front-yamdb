import { Injectable } from '@angular/core';
import { GenreInterface } from '../models/genre';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  api = 'http://127.0.0.1:8000/api/v1/'

  genres: GenreInterface[] = []

  constructor(private http: HttpClient) { }

  getGenres(): Observable<GenreInterface[]> {
    return this.http.get<GenreInterface[]>(this.api + 'genres/')
      .pipe(
        delay(500),
        tap(genres => this.genres = genres),
      )
  }
}
