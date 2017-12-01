import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../../service/ingredient.service'

import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],

})
export class IngredientComponent implements OnInit {

  ingredient:any;

  constructor(public route:ActivatedRoute, public ingredientSer:IngredientService) {

  }

  ngOnInit() {
  //   this.route.params
  //     .subscribe(params => {
  //       this.getDetail(params['id'])
  //   })
  }

  // getDetail(id){
  //   this.ingredientSer.getIngredientsList(id)
  //     .subscribe((e) => {
  //       this.ingredient = e
  //   })
  // }
}
