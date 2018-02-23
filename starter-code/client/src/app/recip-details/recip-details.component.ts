import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recipService } from 'services/recip.service';
import { IngredientsService } from 'services/ingredients.service';

@Component({
  selector: 'app-recip-details',
  templateUrl: './recip-details.component.html',
  styleUrls: ['./recip-details.component.css']
})
export class RecipDetailsComponent implements OnInit {

  recip:any;
  allIngredients:any;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private recipService: recipService,
    private ingredients: IngredientsService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getRecipDetails(params['id']);
  });
  this.ingredients.getAllIngredients().subscribe(list => {
    this.allIngredients = list;
  });
}

  getRecipDetails(id) {
    this.recipService.get(id)
      .subscribe((recip) => {
        this.recip = recip;
      });
  }
  addIngredient(ingredient, quantity) {
    this.recip.ingredients.push(ingredient);
    }

}
