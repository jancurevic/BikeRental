import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ManageUsersPageComponent } from './manage-users-page/manage-users-page.component';
import { ManageStationsPageComponent } from './manage-stations-page/manage-stations-page.component';
import { RentPageComponent } from './rent-page/rent-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserAccountPageComponent } from './user-account-page/user-account-page.component';
import { AuthGuard } from './services/guards/auth.guard';
import { ManageBikesPageComponent } from './manage-bikes-page/manage-bikes-page.component';
import { ManageRentalsPageComponent } from './manage-rentals-page/manage-rentals-page.component';
import { AddBikeWindowComponent } from './add-bike-window/add-bike-window.component';
import { LoginGuard } from './services/guards/login.guard';
import { RegistrationComponent } from './registration/registration.component';
import { AddStationWindowComponent } from './add-station-window/add-station-window.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginPageComponent, canActivate: [LoginGuard] },
  { path: 'registration', component: RegistrationComponent, canActivate: [LoginGuard] },
  {
    path: 'admin-dashboard',
    component: AdminPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user-dashboard',
    component: UserPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manage-users-page',
    component: ManageUsersPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manage-stations-page',
    component: ManageStationsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manage-bikes-page',
    component: ManageBikesPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'manage-rentals-page',
    component: ManageRentalsPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'rent-page', component: RentPageComponent, canActivate: [AuthGuard] },
  {
    path: 'user-account-page',
    component: UserAccountPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-bike-window',
    component: AddBikeWindowComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-station-window',
    component: AddStationWindowComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
