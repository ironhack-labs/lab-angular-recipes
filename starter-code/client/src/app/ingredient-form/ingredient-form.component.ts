import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-ingredient-form',
  templateUrl: './ingredient-form.component.html',
  styleUrls: ['./ingredient-form.component.css']
})
export class IngredientFormComponent implements OnInit {

  constructor(public ingredientsService: IngredientsService, public router: Router) { }

  ngOnInit() {}
    submitIngredientForm(form){
      this.ingredientsService
        .addIngredient ({
          name: form.value.name,
          description: form.value.description,
          image: form.value.image
        })
        .subscribe(ingredient => {
          form.reset();
          this.router.navigate(['/'])
        });
    }

  

}
