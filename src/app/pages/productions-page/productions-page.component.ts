import { Component, OnInit } from '@angular/core';
import { ProductionService } from 'src/app/services/production.service';
import { PageEvent } from 'src/app/models/production';

@Component({
  selector: 'app-productions-page',
  templateUrl: './productions-page.component.html'
})
export class ProductionsPageComponent implements OnInit {

  first: number = 0

  rows: number = 10

  total: number = 0
  
  loading = true

  term = ''

  details = false

  constructor(
    public productionService: ProductionService
  ) {}
  
    ngOnInit(): void {
      this.loadPage()
    }

    onPageChange(event: PageEvent) {
      this.first = event.first
      this.rows = event.rows
      this.loadPage()
  }

  onInput(term: any) {
    this.term = term
    this.loadPage()
    }

  loadPage() {
    this.loading = true
      this.productionService.getProductions(this.first, this.rows, this.term).subscribe( data => {
        this.total = data.total
        this.term = data.search
        this.loading = false
      })
  }

}
