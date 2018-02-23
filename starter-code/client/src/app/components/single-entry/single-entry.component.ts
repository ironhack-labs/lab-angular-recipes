import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from 'app/services/dishes.service';
import { IngredientsService } from 'app/services/ingredients.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

  singleEntry: Object;
  entryId: string;
  ingredients: Array<{}>;

  constructor(private dishesService : DishesService, private route: ActivatedRoute, private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params) => this.entryId = params['id']);

    this.dishesService.getSingleEntry(this.entryId)
    .then((result) => this.singleEntry = result);

    this.ingredientsService.getIngredientList()
    .then((ingredients) => this.ingredients = ingredients);
  }

}
