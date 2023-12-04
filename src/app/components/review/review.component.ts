import { Component, Input } from '@angular/core';
import { ReviewInterface } from 'src/app/models/production';
import { ProductionsPageComponent } from 'src/app/pages/productions-page/productions-page.component';
import { ProductionService } from 'src/app/services/production.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent {

  request_user = localStorage.getItem('request_user')

  visibleAdd: boolean
  visibleChange: boolean

  text = ''

  score = 1

  @Input()
  id_title: number | undefined

  @Input()
  disableAddReview: boolean|undefined

  @Input()
  reviews: ReviewInterface[]

  constructor(
    public productionService: ProductionService,
    public userService: UserService,
    private productionsPageComponenet: ProductionsPageComponent,
  ) { }

  showModal() {
    this.visibleAdd = true
  }

  deleteReview(id_title: number | undefined, id_review: number | undefined) {
    this.productionService.deleteReview(id_title, id_review)
      .subscribe(() => {
        this.productionsPageComponenet.loadPage()
      })
  }

  changeReview(id_title: number | undefined, id_review: number | undefined) {
    this.productionService.getProductionReview(id_title, id_review)
      .subscribe(data => {
        this.text = data.text,
          this.score = data.score
      })
    this.visibleChange = true
  }
}
