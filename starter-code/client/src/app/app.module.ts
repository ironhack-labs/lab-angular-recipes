import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { FoodComponent } from "./component/food/food.component";
import { ShiftService } from "./service/shift.service";
import { UnitfoodComponent } from "./component/unitfood/unitfood.component";
import {routes} from './routes';

@NgModule({
  declarations: [AppComponent, FoodComponent, UnitfoodComponent],
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [ShiftService],
  bootstrap: [AppComponent]
})
export class AppModule {}
