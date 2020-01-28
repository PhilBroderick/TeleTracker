import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ShowComponent } from "./components/show/show.component";
import { ShowDetailComponent } from "./components/show-detail/show-detail.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DiscoverComponent } from "./components/discover/discover.component";
import { ShowsComponent } from "./components/shows/shows.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    ShowDetailComponent,
    HomeComponent,
    NavbarComponent,
    DiscoverComponent,
    ShowsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
