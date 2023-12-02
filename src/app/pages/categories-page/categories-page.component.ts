import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html'
})
export class CategoriesPageComponent implements OnInit {

  term = ''

  loading = true

  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.loading = true

    this.categoryService.getCategory().subscribe(() => {
      this.loading = false
    })
  }
}
