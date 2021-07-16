import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OdashboardComponent } from './operator/odashboard/odashboard.component';
import { RdashboardComponent } from './reporter/rdashboard/rdashboard.component';
import { AdashboardComponent } from './admin/adashboard/adashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    OdashboardComponent,
    RdashboardComponent,
    AdashboardComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
