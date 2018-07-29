import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html',
  styleUrls: ['./new-ingredient.component.css']
})
export class NewIngredientComponent implements OnInit {

  constructor(public recipesService: RecipesService, private router: Router) { }

  ngOnInit() {
  }

  newIngredient(name: string) {
    this.recipesService.newIngredient(name).subscribe( (res: any) => this.router.navigate(['/']))
  }
}
