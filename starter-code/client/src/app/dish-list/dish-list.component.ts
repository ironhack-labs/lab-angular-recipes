import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'services/recipes.service';


interface recipe {
  name: String,
  image: String,
  description: String
}

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  recipeList: Array<recipe>
  constructor(private RecipesService:RecipesService) { }

  ngOnInit() {
    this.RecipesService.getRecipes().subscribe( res => {
      this.recipeList = res.map(e => {
        return {name: e.name, image: e.image, id: e._id} 
      })
    })
  }

}
