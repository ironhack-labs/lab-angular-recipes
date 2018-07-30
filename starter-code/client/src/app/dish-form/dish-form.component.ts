import { Component, OnInit } from '@angular/core';
import {DishesService} from '../dishes.service'
@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent implements OnInit {

  constructor(private dS: DishesService) { }

  ngOnInit() {
  }

  addDish(form) {
    const dish = {
      name: form.value.name,
      image: form.value.image,
      description: form.value.description,
      ingredients: []
    }
    this.dS.addDish(dish).subscribe(recipe => {
      form.reset();
    });
}


}
