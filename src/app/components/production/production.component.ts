import { Component, Input } from '@angular/core';
import { ProductionInterface } from 'src/app/models/production';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html'
})
export class ProductionComponent {

  details = false

  @Input()
  production: ProductionInterface

}
