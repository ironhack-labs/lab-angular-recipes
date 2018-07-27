import { Component, OnInit } from "@angular/core";
import { recipesService } from "service/recipes.service";

@Component({
  selector: "app-newrecipe",
  templateUrl: "./newrecipe.component.html",
  styleUrls: ["./newrecipe.component.css"]
})
export class NewrecipeComponent implements OnInit {
  constructor(public recipeService: recipesService) {}

  ngOnInit() {}

  newRecipe(myForm) {
    console.log(myForm.value);
    this.recipeService
      .newRecipe({
        name: myForm.value.name,
        image: myForm.value.image,
        description: myForm.value.description
      })
      .subscribe();
  }
}
