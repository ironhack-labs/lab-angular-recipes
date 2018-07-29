import { Component, OnInit } from '@angular/core';
import { DishesService } from '../dishes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
 dish:object;
  constructor(private RecipesService: DishesService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.RecipesService.getSingleRecipe(params.id).subscribe( res =>{
        console.log(res);
        this.dish = res
      })
    })
  }

}
