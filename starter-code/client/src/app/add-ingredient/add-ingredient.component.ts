import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../services/ingredients.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-ingredient',
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent implements OnInit {

  constructor(public Iservice: IngredientsService, public router: Router) { }

  ngOnInit() {

  }
  addIngredient(myForm){
    this.Iservice.addNewIngredient(myForm.form.value);
    this.router.navigate(['']);
  };
}
