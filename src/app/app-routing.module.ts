import { ShowDetailComponent } from "./components/show-detail/show-detail.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";
import { DiscoverComponent } from "./components/discover/discover.component";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "discover", component: DiscoverComponent },
  { path: "show/:id", component: ShowDetailComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
