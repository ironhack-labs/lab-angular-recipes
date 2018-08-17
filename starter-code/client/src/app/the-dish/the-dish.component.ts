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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getDishDetails(params['id']);
    });
  }

  getDishDetails(id) {
    this.dish.getId(id)
      .subscribe((dish) => {
        this.dishes = dish;
        console.log(this.dishes)
      });
  }

  submitForm(myForm){
    
    let item: Object = {title: myForm.value.title, content: myForm.value.content};

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
