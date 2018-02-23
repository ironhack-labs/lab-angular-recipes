
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientsService } from 'services/ingredients.service';
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