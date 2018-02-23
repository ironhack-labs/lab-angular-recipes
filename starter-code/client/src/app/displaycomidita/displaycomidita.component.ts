import { Component, OnInit } from "@angular/core";
import { LaComelona } from "services/lacomelona.service";
@Component({
  selector: "app-displaycomidita",
  templateUrl: "./displaycomidita.component.html",
  styleUrls: ["./displaycomidita.component.css"]
})
export class DisplaycomiditaComponent implements OnInit {
  recipes:Array<any>;
  constructor(private lC:LaComelona) {
    this.lC.tuComida().subscribe(dishes => (this.recipes = dishes));
  }

  ngOnInit() {}
}
