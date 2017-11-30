import { Component, OnInit, Input } from '@angular/core';
import { ingredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
})
export class IngredientComponent implements OnInit {
  @Input() theIngredient:any;

  constructor() { }

  ngOnInit() {
  }

}
