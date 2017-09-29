import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { DishesService} from '../services/dishes.service';
import { IngredientsService} from '../services/ingredients.service'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dishes-details',
  templateUrl: './dishes-details.component.html',
  styleUrls: ['./dishes-details.component.css'],
  providers: [IngredientsService]
})
export class DishesDetailsComponent implements OnInit {
dish;
ingredient;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dishesservice: DishesService,
    private ingredientsservice: IngredientsService
) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.getDishesDetails(params['id'])

    })
  this.ingredientsservice.getListIngredients().subscribe(result => this.ingredient = result)
  }


    getDishesDetails(id) {
      this.dishesservice.get(id)
        .subscribe((dish) => {
          this.dish = dish;
        });

}
}
