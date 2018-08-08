import { Component, OnInit } from '@angular/core';
import { DishesServiceService } from 'services/dishes-service.service';
import { IngredientsService } from 'services/ingredients.service';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-singlerecipe',
  templateUrl: './singlerecipe.component.html',
  styleUrls: ['./singlerecipe.component.css']
})
export class SinglerecipeComponent implements OnInit {
dishId: String;
singledish: Observable<any>
dishingredients: Observable<any>
newIngredient: Object = {};
quantity: Number = 0;

  constructor(public dish: DishesServiceService, public ingredients: IngredientsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => {
      this.dishId = params['id'],
      this.dish.get(this.dishId).subscribe(res => this.singledish = res);
      this.ingredients.getIngredients().subscribe(res => this.dishingredients = res);

    });
  }
  addIngredient(ingredient, cantidad) {
    this.dish.addIngredient(this.dishId, ingredient._id, parseInt(cantidad.value))
      .subscribe( res=> {
        console.log(res)
        this.dish.get(this.dishId).subscribe(res => this.singledish = res);
      });
      /* this.newIngredient = {
      id: ingredient._id,
      name: ingredient.name,
      quantity: parseInt(cantidad.value)
      };
      console.log(this.newIngredient); */
 }
 }


