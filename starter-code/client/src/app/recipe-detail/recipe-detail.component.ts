import { Component, OnInit } from '@angular/core';
import { dishesService } from '../../services/dishes.service';
import { ActivatedRoute } from '@angular/router';
import { ingredientsService } from '../../services/ingredients.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  providers:[ingredientsService]
})
export class RecipeDetailComponent implements OnInit {
  id: String;
  name: String;
  image:String;
  description:String;

  ingredients:Array<any>=[];

  constructor(private route: ActivatedRoute, private recipeServ :dishesService,
              public ingredientServ : ingredientsService) {
}

  ngOnInit() {
    this.route.params
      .subscribe(params=>{
        this.id=params['id'];
        this.recipeServ.getEntry(this.id)
          .subscribe(item =>{
            this.name=item.name;
            this.image=item.image;
            this.description=item.description;
          });
    });

    this.ingredientServ.getIngredients()
      .subscribe(items => {
          this.ingredients = items;});


  }

}
