import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'services/recipes.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-add-dishes',
  templateUrl: './add-dishes.component.html',
  styleUrls: ['./add-dishes.component.css']
})
export class AddDishesComponent implements OnInit {

  constructor(public recipesService: RecipesService, public router: Router) { }

  ngOnInit() {
  }
    submitDishForm(form) {
      let newDish = {
        name: form.value.name,
        image: form.value.image,
        description: form.value.description,
        ingredientes: []
      }
      this.recipesService.addDish(newDish).subscribe(() => {
        form.reset();
        this.router.navigate(["/"])
      });
    }
  }
 


