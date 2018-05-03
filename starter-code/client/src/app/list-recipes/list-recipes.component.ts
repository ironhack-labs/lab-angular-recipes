import { Component, OnInit } from '@angular/core';
import { DishesserverService } from '../dishesserver.service';


@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css'],
  providers: [DishesserverService]
})

export class ListRecipesComponent implements OnInit {

  recipes: Array<string>;

  constructor(private recipe: DishesserverService ) { }

  ngOnInit() {
    this.recipe.getList().subscribe(
      (recipes) => { this.recipes = recipes; }
    );
  }

}
