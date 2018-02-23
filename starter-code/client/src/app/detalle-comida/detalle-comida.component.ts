import { Component, OnInit } from "@angular/core";
import { LaComelona } from "services/lacomelona.service";
import {ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: "app-detalle-comida",
  templateUrl: "./detalle-comida.component.html",
  styleUrls: ["./detalle-comida.component.css"]
})
export class DetalleComidaComponent implements OnInit {
  platito: any;
  constructor(
    private lC: LaComelona,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.LaComiditaId(params['id'])
    })
  }
  LaComiditaId(id){
    this.lC.detallitosDeTuComida(id).subscribe((platito => this.platito = platito))
  }
}
