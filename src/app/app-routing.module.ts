import { SearchComponent } from './components/search/search.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { MovieDetailResolver } from './shared/resolvers/movie-detail.resolver';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ShowListResolver } from './shared/resolvers/show-list.resolver';
import { ShowDetailResolver } from './shared/resolvers/show-detail.resolver';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionResolver } from './shared/resolvers/subscription.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { shows: ShowListResolver } },
  { path: 'discover', component: DiscoverComponent },
  {
    path: 'show/:id',
    component: ShowDetailComponent,
    canActivate: [AuthGuard],
    resolve: { show: ShowDetailResolver }
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent,
    canActivate: [AuthGuard],
    resolve: { movie: MovieDetailResolver }
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
    canActivate: [AuthGuard],
    resolve: { subscriptions: SubscriptionResolver }
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
