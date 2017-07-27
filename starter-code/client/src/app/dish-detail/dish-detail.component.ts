import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipes.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  name:string;
  image:string;
  description:string;

  constructor(private route: ActivatedRoute, private dishService:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
        this.dishService.getDish( params['id'] ).subscribe(
          dish=>{
            this.name = dish.name;
            this.image = dish.image;
            this.description = dish.description;
          }
        )
    });
  }

}
