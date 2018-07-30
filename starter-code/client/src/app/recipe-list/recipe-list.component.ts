import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  list : Array<Object> = [];
  constructor(public recipeService : RecipeService) { }

  ngOnInit() {
    this.recipeService.getList().subscribe((list) => {
      this.list = list;
      console.log(this.list)
  })
}

}
