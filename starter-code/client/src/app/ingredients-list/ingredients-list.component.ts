import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../ingredients.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css'],
  providers: [IngredientsService]
})
export class IngredientsListComponent implements OnInit {
  ingredients;

  constructor( private IngredientsService: IngredientsService ) { }

  ngOnInit() {
    this.IngredientsService.getIngredients()
    .subscribe((ingredients) => {
      this.ingredients = ingredients;
    });
  }

}
