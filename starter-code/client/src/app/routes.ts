import { Routes } from "@angular/router";
import {DisplaycomiditaComponent} from "./displaycomidita/displaycomidita.component"
import {DetalleComidaComponent} from "./detalle-comida/detalle-comida.component"

export const routes: Routes = [
  { path: "", component: DisplaycomiditaComponent },
  {path:"dishes/:id", component: DetalleComidaComponent },
  { path: "**", redirectTo: "" }
];
