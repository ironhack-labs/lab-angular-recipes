import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

import { RetrieveIngredientsService } from '../services/retrieve-ingredients.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  newIngredient

  constructor() { }

  ngOnInit() {
  }

}
