import { Injectable } from '@angular/core';
import { CategoryInterface } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  api = 'http://127.0.0.1:8000/api/v1/'

  categories: CategoryInterface[] = []

  constructor(private http: HttpClient) { }

  getCategory(): Observable<CategoryInterface[]> {
    return this.http.get<CategoryInterface[]>(this.api + 'categories/')
      .pipe(
        delay(500),
        tap(categories => this.categories = categories),
      )
  }
}
