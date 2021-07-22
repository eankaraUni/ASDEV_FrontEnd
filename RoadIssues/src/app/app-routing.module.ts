import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdashboardComponent } from './admin/adashboard/adashboard.component';
import { RdashboardComponent } from './reporter/rdashboard/rdashboard.component';
import { OdashboardComponent } from './operator/odashboard/odashboard.component';
import { UserpanelComponent } from './admin/userpanel/userpanel.component';

import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { ReporterGuard } from './guards/reporter.guard';
import { OperatorGuard } from './guards/operator.guard';

const routes: Routes = [
  {path:"", component:HomeComponent},
  //{path:"about", component:AboutComponent},
  //{path:"restaurant", component:RestaurantComponent},
  //{path:"menu/:name", component:MenuComponent},
  {path:"home", component:HomeComponent},
  {path:"login", component:LoginComponent, canActivate:[AuthGuard]},
  {path:"signup", component:SignupComponent, canActivate:[AuthGuard]},
  {path:"admin", component:UserpanelComponent, canActivate:[AdminGuard]},
  {path:"operator", component:OdashboardComponent, canActivate:[OperatorGuard]},
  {path:"reporter", component:RdashboardComponent, canActivate:[ReporterGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
