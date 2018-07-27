import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'services/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-dish',
  templateUrl: './single-dish.component.html',
  styleUrls: ['./single-dish.component.css']
})
export class SingleDishComponent implements OnInit {
  singleRecipe = {}
  constructor(private RecipesService: RecipesService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.RecipesService.getSingleRecipe(params.id).subscribe( res =>{
        console.log(res);
        this.singleRecipe = res
      })
    })
  }

}
