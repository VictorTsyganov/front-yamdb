import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductionsPageComponent } from 'src/app/pages/productions-page/productions-page.component';
import { ErrorService } from 'src/app/services/error.service';
import { ProductionService } from 'src/app/services/production.service';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html'
})
export class CreateReviewComponent {

  @Input()
  value: number = 1

  @Input()
  reviewText!: string

  @Input()
  id_title: number | undefined

  @Input()
  id_review: number | undefined

  @Input()
  create: boolean

  constructor(
    private productionService: ProductionService,
    private productionsPageComponenet: ProductionsPageComponent,
    public errorService: ErrorService
  ) { }

  reviewForm = new FormGroup({
    text: new FormControl<string>('', [
      Validators.required
    ])
  })

  get text() {
    return this.reviewForm.controls.text as FormControl
  }

  submit() {
    if (this.id_title && this.id_review) {
      this.productionService.changeReview(this.id_title, this.id_review, {
        text: this.reviewText as string,
        score: this.value
      }).subscribe(() => {
        this.productionsPageComponenet.loadPage()
      })
    } else {
      this.productionService.createReview(this.id_title, {
        text: this.reviewForm.value.text as string,
        score: this.value
      }).subscribe(() => {
        this.productionsPageComponenet.loadPage()
      })
    }
  }
}
