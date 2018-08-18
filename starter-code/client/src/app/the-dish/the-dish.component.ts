import { Component, OnInit } from '@angular/core';
import { RetrieveDishesService } from '../retrive-dishes/retrieve-dishes.service';
import { RetrieveIngredientsService  } from '../retrieve-ingredients/retrieve-ingredients.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-the-dish',
  templateUrl: './the-dish.component.html',
  styleUrls: ['./the-dish.component.css'],
  providers:[RetrieveDishesService, RetrieveIngredientsService]
})

export class TheDishComponent implements OnInit {

  dishes: any;
  ingredients: any;

  constructor(
    private dish: RetrieveDishesService,
    private ingredient: RetrieveIngredientsService,
    // private Ingredients: RetrieveIngredientsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDishDetails(params['id']);
    });
    
    console.log(this.ingredient);
    this.ingredient.getList()
      .subscribe((ingredients) => {
        this.ingredients = ingredients;
    })
  }

  getDishDetails(id) {
    this.dish.getId(id)
      .subscribe((dish) => {
        this.dishes = dish;
        console.log(this.dishes)
      });
  }

  submitForm(myForm, ingredient){
    
    // let item: Object = { ingredientId: ingredient._id, quantity: myForm.value.quantity};
    console.log(ingredient);
    if(!myForm.value.quantity){
      alert("Must be more than 0")
    
    } else {
      console.log(this.dishes._id, ingredient._id, myForm.value.quantity)
      this.ingredient.addIt(this.dishes._id, ingredient._id, myForm.value.quantity)    
      .subscribe((dish) => {
        this.router.navigate(["dishes", this.dishes._id])
      });
    }

  }
}
