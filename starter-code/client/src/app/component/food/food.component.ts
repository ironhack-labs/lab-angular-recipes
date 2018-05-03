import { Component, OnInit } from "@angular/core";
import { ShiftService } from "../../service/shift.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-food",
  templateUrl: "./food.component.html",
  styleUrls: ["./food.component.css"]
})
export class FoodComponent implements OnInit {
  plates: Array<Object>;
  constructor(public shiftservice: ShiftService, private router: Router) {}

  ngOnInit() {
    this.shiftservice.getRecipes().subscribe(plates => (this.plates = plates));
  }
}
