import { Component, OnInit } from '@angular/core';
import { DishesService } from 'app/dishes.service';
import { ActivatedRoute } from '@angular/router';

interface IDish{
  name:string;
  image:string;
  description:string;
}

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  dishInfo:IDish;
  constructor(private dishesService:DishesService,private route:ActivatedRoute) {
    this.dishInfo = {name:"",image:"",description:""}
  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.dishesService.getSingleDish(params['recipeId']).then((dish:IDish)=>{
        this.dishInfo = dish;
      })
    })
  }

}
