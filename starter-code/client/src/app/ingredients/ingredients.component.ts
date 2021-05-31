import { Component, OnInit, Input } from '@angular/core';
import { IngredientsService } from 'services/ingredients.service';
import { Ingredient } from 'interfaces/Ingredient';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients: Array<Ingredient>
  dishId: string;
  constructor(private ingredientService: IngredientsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ingredientService.getIngredients()
      .subscribe(ingredients => this.ingredients=ingredients);
    this.route.params.subscribe(params=>this.dishId=params['id']);
  }

  showForm(){
    this.ingredientService.showForm = true;
  }


  addIngredient(newIngredient){
    this.ingredientService.addIngredient(newIngredient.value).subscribe(()=>{
      this.router.navigate(['/dishes', this.dishId])
    });
    this.ingredientService.showForm = false;
  }

  cancelForm(){
    this.ingredientService.showForm = false;
  }

  addToRecipe(ingredientId, quantity){
    console.log(quantity)
    this.ingredientService.addToRecipe(this.dishId, ingredientId, quantity).subscribe();
  }
}
