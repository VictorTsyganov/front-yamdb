import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ProductionInterface, ReviewInterface } from '../models/production';
import { Observable, catchError, delay, map, tap, throwError } from 'rxjs';
import { PaginatedProductions } from '../models/paginate-priductions';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  api = 'http://127.0.0.1:8000/api/v1/'

  term: string = ''

  productions: ProductionInterface[] = []

  filteredItems: ProductionInterface[] = []

  reviews: ReviewInterface[] = []

  review: ReviewInterface

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  getProductions(first: number, rows: number, search: string): Observable<PaginatedProductions> {
    return this.http.get<ProductionInterface[]>(this.api + 'titles/')
      .pipe(
        delay(500),
        map(items => {
          this.filteredItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
          return new PaginatedProductions(this.filteredItems.length, this.filteredItems.slice(first, first + rows), search)
        }),
        tap(productions => this.productions = productions.rows),
      )
  }

  getProductionReviews(id: number | undefined): Observable<ReviewInterface[]> {
    return this.http.get<ReviewInterface[]>(this.api + `titles/${id}/reviews/`)
      .pipe(
        tap(reviews => this.reviews = reviews)
      )
  }

  getProductionReview(id_title: number | undefined, id_review: number | undefined): Observable<ReviewInterface> {
    return this.http.get<ReviewInterface>(this.api + `titles/${id_title}/reviews/${id_review}/`)
      .pipe(
        tap(review => this.review = review)
      )
  }

  createReview(id: number | undefined, reviewData: ReviewInterface): Observable<ReviewInterface> {
    return this.http.post<ReviewInterface>(this.api + `titles/${id}/reviews/`, reviewData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    }).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  changeReview(id_title: number | undefined, id_review: number | undefined, reviewData: ReviewInterface): Observable<ReviewInterface> {
    return this.http.patch<ReviewInterface>(this.api + `titles/${id_title}/reviews/${id_review}/`, reviewData, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    }).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }
  deleteReview(id_title: number | undefined, id_review: number | undefined): Observable<void> {
    return this.http.delete<void>(this.api + `titles/${id_title}/reviews/${id_review}/`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      }
    }).pipe(
      catchError(this.errorHandler.bind(this))
    )
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.error)
    return throwError(() => error.error)
  }

}
