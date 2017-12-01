import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { ingredientsService } from '../../services/ingredients.service';
import { dishesService } from '../../services/dishes.service';
@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
})
export class IngredientComponent implements OnInit {
  @Input() theIngredient:any;
  @Output() onAdd = new EventEmitter<string>();
  constructor(private recipeServ :dishesService) { }

  ngOnInit() {

  }
eventAdd(id,quantity){
  console.log("ingredient.component eventAdd");
  this.onAdd.emit(id);
}
}
