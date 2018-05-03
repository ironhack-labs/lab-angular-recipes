import { Component, OnInit } from "@angular/core";
import { ShiftService } from "../../service/shift.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-unitfood",
  templateUrl: "./unitfood.component.html",
  styleUrls: ["./unitfood.component.css"]
})
export class UnitfoodComponent implements OnInit {
  plate: Object;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private ShiftService: ShiftService
  ) {
    route.params.subscribe(params => {
      ShiftService.getRecipe(params.id).subscribe(plate => {
        console.log(plate);
        this.plate = plate;
      });
    });
  }

  ngOnInit() {}
}
