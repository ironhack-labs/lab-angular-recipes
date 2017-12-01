import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  constructor(public recipeService: RecipesService, public router: Router) { }

  ngOnInit() {
  }
  addDish(myForm){
    this.recipeService.addNewDish(myForm.form.value);
    this.router.navigate(['']);
  };
}
