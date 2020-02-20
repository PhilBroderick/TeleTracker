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

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { shows: ShowListResolver } },
  { path: 'discover', component: DiscoverComponent },
  {
    path: 'show/:id',
    component: ShowDetailComponent,
    canActivate: [AuthGuard],
    resolve: { show: ShowDetailResolver }
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
