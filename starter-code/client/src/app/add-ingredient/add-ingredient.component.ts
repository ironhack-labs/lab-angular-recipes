import { Component, OnInit } from '@angular/core';
import { DishesListService } from '../services/dishes-list.service';

@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  newIng: any = {};

  constructor(
    private dishesService: DishesListService
  ) { }

  ngOnInit() {
  }

  addNewIng() {
    this.dishesService.postNewIng(this.newIng)
      .subscribe(
        (data) => {
          console.log('Success Posting Ing --> ', data);
        }
      )
  }

}
