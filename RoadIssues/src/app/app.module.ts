import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OdashboardComponent } from './operator/odashboard/odashboard.component';
import { RdashboardComponent } from './reporter/rdashboard/rdashboard.component';
import { AdashboardComponent } from './admin/adashboard/adashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';

import { MaterialModule } from './material/material.module';
import { UserpanelComponent } from './admin/userpanel/userpanel.component';
import { AddIssueComponent } from './reporter/add-issue/add-issue.component';


@NgModule({
  declarations: [
    AppComponent,
    OdashboardComponent,
    RdashboardComponent,
    AdashboardComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    UserpanelComponent,
    AddIssueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
