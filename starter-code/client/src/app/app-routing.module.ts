import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EntryListComponent } from "./components/entry-list/entry-list.component";
import { SingleEntryComponent } from "./components/single-entry/single-entry.component";

const routes: Routes = [
  { path: "", component: EntryListComponent },
  { path: "entries/:id", component: SingleEntryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
