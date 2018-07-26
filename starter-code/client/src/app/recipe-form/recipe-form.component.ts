import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'services/recipes.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
  providers: [ RecipesService ]
})
export class RecipeFormComponent implements OnInit {

  constructor(private rS: RecipesService) { }

  ngOnInit() {
  }

  addRecipe(form) {
    const recipe = {
      name: form.value.name,
      image: form.value.image,
      description: form.value.description,
      ingredientes: []
    }
    this.rS.createDish(recipe).subscribe(recipe => {
      form.reset();
    });
  }

}
