import { Routes } from '@angular/router';
import { ReceiptDetailsComponent } from './receipt-details/receipt-details.component';
import { ReceiptListComponent } from './receipt-list/receipt-list.component';

export const routes: Routes = [
    { path: '', component: ReceiptListComponent },
    { path: 'receipt/:id', component: ReceiptDetailsComponent },
    { path: '**', redirectTo: '' }
];
