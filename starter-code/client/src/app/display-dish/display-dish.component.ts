import { Component, OnInit } from '@angular/core';
import { RetrieveDishService } from '../Services/retrieve-dish.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { RetrieveIngredientsService } from '../Services/retrieve-ingredients.service';



@Component({
  selector: 'app-display-dish',
  templateUrl: './display-dish.component.html',
  styleUrls: ['./display-dish.component.css']
})
export class DisplayDishComponent implements OnInit {
  dishId: number;
  dish:any={}
  ingredients$: Observable<any>;
  ingredient$: Object;
  constructor(
    private route: ActivatedRoute,
    private theDish: RetrieveDishService,
    private theIngredients: RetrieveIngredientsService,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.params 
    .subscribe((params) => {
      this.theDish.getOneDish(params.id).subscribe(dish => {console.log(this.dish); this.dish = dish})
      
      
    });
    this.theIngredients.getIngredients().subscribe((ingredients)=>{
      this.ingredients$ = ingredients;
    })
    // this.ingredients$ = this.theIngredients.getIngredients() con el async en el for
  }

  addIngredient(dishId, ingredientId, quantity){
    this.theDish.addOneIngredient(dishId, ingredientId, quantity).subscribe(dish=>{
      this.dish = dish;
    } )
    }
  
  

}
