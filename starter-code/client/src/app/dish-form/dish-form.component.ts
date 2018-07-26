import { Component, OnInit } from '@angular/core';
import { DishesService } from 'services/dishes.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent implements OnInit {

  constructor(public dishService:DishesService, public router: Router) { }

  ngOnInit() {
  }
  submitDishForm(form) {
    let newDish = {
      name: form.value.name,
      image: form.value.image,
      description: form.value.description,
      ingredientes: []
    }
    this.dishService.addDish(newDish).subscribe(() => {
      form.reset();
      this.router.navigate(["/"])
    });
  }
}
