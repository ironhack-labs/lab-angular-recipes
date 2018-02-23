import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { DisplaycomiditaComponent } from "./displaycomidita/displaycomidita.component";
import { LaComelona } from "services/lacomelona.service";
import { DetalleComidaComponent } from './detalle-comida/detalle-comida.component';
import {routes} from './routes'
import {RouterModule} from '@angular/router'

@NgModule({
  declarations: [AppComponent, DisplaycomiditaComponent, DetalleComidaComponent],
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [LaComelona],
  bootstrap: [AppComponent]
})
export class AppModule {}
