import { Component, OnInit } from '@angular/core';
import { dishesService } from '../../services/dishes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {

  listRecipes: Array<any>;
  constructor( private recipeServ : dishesService) { }

  ngOnInit() {
      this.recipeServ.getEntries()
        .subscribe(e => {
          this.listRecipes = e;
        });
      }

}
