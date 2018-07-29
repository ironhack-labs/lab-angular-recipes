import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {

  constructor(public recipeService:RecipesService,public router:Router) { }

  ngOnInit() {
  }
  submitRecipeForm(form){
    let newRecipe ={
      name: form.value.name,
      image: form.value.image,
      description: form.value.description,
      ingredients:[]
    }
    this.recipeService.addRecipe(newRecipe)
    .subscribe(()=> {
      form.reset();
      this.router.navigate(['/'])
    });
  }

}
