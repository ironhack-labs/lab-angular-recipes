import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes: string;

  constructor(public recipe: RecipesService) { }

  ngOnInit() {
    this.recipe.getDish().subscribe(data=> this.dishes = data);
  }

}
