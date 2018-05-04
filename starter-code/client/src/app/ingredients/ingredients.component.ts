import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { IngredientsService } from '../services/ingredients.service';


@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {
  ingredients$:Observable<any>;

  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.ingredients$ = this.ingredientsService.getList()
    console.log(this.ingredients$)
  }

}
