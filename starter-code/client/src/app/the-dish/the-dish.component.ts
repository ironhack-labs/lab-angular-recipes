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
    private Ingredients: RetrieveIngredientsService,
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

  submitForm(myForm){
    
    let item: Object = {name: myForm.value.name, description: myForm.value.description, };

    if(!myForm.value.title){
      alert("Please fill out the title")
    } else {
    this.ingredient.addIt(item)    
      .subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
    console.log(item)
    }

  }
}
