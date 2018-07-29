import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  constructor(public recipesService: RecipesService, private router: Router) { }

  ngOnInit() {
  }

  newRecipe(name: string, image: string, description: string) {
    this.recipesService.newRecipe(name, image, description).subscribe( (res: any) => this.router.navigate(['/']))
  }

}
