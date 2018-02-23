import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../services/dishes';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-single-recipe',
  templateUrl: './single-recipe.component.html',
  styleUrls: ['./single-recipe.component.css']
})
export class SingleRecipeComponent implements OnInit {
 
  dishes:any;
  

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private dishesService:DishesService,
   
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
     
      this.getRecipe(params['id']);
      
     
    });
  }
  getRecipe(id) {
    this.dishesService.get(id)
      .subscribe((dishes) => {
        this.dishes = dishes;
      });
  }

 

}
