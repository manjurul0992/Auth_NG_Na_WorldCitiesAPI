import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityViewComponent } from './Component/city-view/city-view.component';
import { CountryViewComponent } from './Component/country-view/country-view.component';
import { LoginComponent } from './Component/login/login.component';
import { REGISTERComponent } from './Component/register/register.component';
import { MANUComponent } from './Component/manu/manu.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: "COUNTRY", component: CountryViewComponent, canActivate: [AuthGuard] },
  { path: "CT", component: CityViewComponent, canActivate: [AuthGuard] },

  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
