import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { routes } from './routes';
import { DishesService } from '../services/dishes.service';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';
import { ReceiptDetailsComponent } from './receipt-details/receipt-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceiptListComponent,
    ReceiptDetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
