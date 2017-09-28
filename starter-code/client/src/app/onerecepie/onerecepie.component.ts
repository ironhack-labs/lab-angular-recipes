import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../service/retrieve.service'
import { IngredientService } from '../service/ingredient.service'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/toPromise'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onerecepie',
  templateUrl: './onerecepie.component.html',
  styleUrls: ['./onerecepie.component.css']
})
export class OnerecepieComponent implements OnInit {
  dishId;
  dish;
  ingredients;
  constructor(public retrieve:RetrieveService, private route: ActivatedRoute, public ingredient: IngredientService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => {
        this.dishId = String(params['id'])
        this.retrieve.get(this.dishId)
        .subscribe( e => {
            this.dish = e
            });
      });

    this.ingredient.getAll().subscribe( i => {
              this.ingredients = i
            })

  }

  add(){

  }

}
