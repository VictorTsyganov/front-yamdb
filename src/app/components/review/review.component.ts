import { Component, Input, OnInit } from '@angular/core';
import { ProductionsPageComponent } from 'src/app/pages/productions-page/productions-page.component';
import { ProductionService } from 'src/app/services/production.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  request_user = localStorage.getItem('request_user')

  disable = false

  details = false

  visible: boolean

  text = ''

  score = 1
  
  @Input()
  id_title: number|undefined

  constructor(
    public productionService: ProductionService,
    public userService: UserService,
    private productionsPageComponenet: ProductionsPageComponent,
  ) {}

  ngOnInit(): void {
    this.productionService.getProductionReviews(this.id_title).subscribe(data => {
      if ((data.filter(items => items.author?.includes(this.request_user as string))).length !== 0) {
        this.disable = true
      } else {
        this.disable = false
      }
    })
  }

  showModal() {
    this.visible = true
  }

  deleteReview(id_title: number|undefined, id_review: number|undefined) {
    this.productionService.deleteReview(id_title, id_review)
      .subscribe(() => {
        this.productionsPageComponenet.loadPage()
      })
  }

  changeReview(id_title: number|undefined, id_review: number|undefined) {
    this.productionService.getProductionReview(id_title, id_review)
      .subscribe(data => {
        this.text = data.text,
        this.score = data.score
      })
    this.visible = true
    }
}
