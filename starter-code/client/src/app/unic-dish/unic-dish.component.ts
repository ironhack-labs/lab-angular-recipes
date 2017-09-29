import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RecipesService } from '../services/recipes.service';
// import { IngredientListComponent } from '../ingredient-list/ingredient-list.component';

@Component({
  selector: 'app-unic-dish',
  templateUrl: './unic-dish.component.html',
  styleUrls: ['./unic-dish.component.css']
})

export class UnicDishComponent implements OnInit {

  unicDish;
  ingredients;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private recipeService: RecipesService,
    // private esto: IngredientListComponent
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDishDetails(params['id'])
      // this.getIngredients()

    });
  }

  getDishDetails(id) {
    this.recipeService.get(id)
      .subscribe((dish) => {
        this.unicDish = dish;
      });
  }

  // getIngredients(){
  //   this.ingredients = this.esto;
  // }

}


//   deletePhone() {
//     if (window.confirm('Are you sure?')) {
//       this.phoneService.remove(this.phone._id)
//         .subscribe(() => {
//           this.router.navigate(['']);
//         });
//     }
//   }
//
// }
