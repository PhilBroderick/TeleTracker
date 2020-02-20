import { AuthGuard } from './shared/guards/auth.guard';
import { environment } from './../environments/environment';
import { ShowListResolver } from './shared/resolvers/show-list.resolver';
import { ShowDetailResolver } from './shared/resolvers/show-detail.resolver';
import { ReadMorePipe } from './shared/pipes/read-more.pipe';
import { ErrorInterceptorProvider } from './core/services/error.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './core/services/auth.service';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { ShowsComponent } from './components/shows/shows.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { SeasonComponent } from './components/season/season.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowListComponent } from './components/show-list/show-list.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    ShowDetailComponent,
    HomeComponent,
    NavbarComponent,
    DiscoverComponent,
    ShowsComponent,
    LoaderComponent,
    NotFoundComponent,
    SeasonComponent,
    LoginComponent,
    RegisterComponent,
    ShowListComponent,
    ReadMorePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [environment.whitelist],
        blacklistedRoutes: [`${environment.whitelist}/api/auth`]
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    ShowDetailResolver,
    ShowListResolver,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
