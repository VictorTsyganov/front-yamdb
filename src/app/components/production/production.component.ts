import { Component, Input, OnInit } from '@angular/core';
import { ProductionInterface } from 'src/app/models/production';
import { ProductionService } from 'src/app/services/production.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html'
})
export class ProductionComponent implements OnInit {

  request_user = localStorage.getItem('request_user')

  detailsProduction = false

  @Input()
  production: ProductionInterface

  @Input()
  production_id: number|undefined

  constructor(
    public productionService: ProductionService,
  ) { }

  ngOnInit(): void {
    this.productionService.getProductionReviews(this.production_id).subscribe(data => {
      this.production.reviews = data
      if ((data.filter(items => items.author?.includes(this.request_user as string))).length !== 0) {
        this.production.disable_add_review = true
      } else {
        this.production.disable_add_review = false
      }
    })
  }
}
