import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RetrieveService} from './service/retrieve.service';
import { IngredientService } from './service/ingredient.service'


import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import {routes} from './routes';
import {RouterModule} from '@angular/router';
import { OnerecepieComponent } from './onerecepie/onerecepie.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    OnerecepieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RetrieveService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
