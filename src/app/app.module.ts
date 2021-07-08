import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TablesComponent } from './components/tables/tables.component';
import { LoginComponent } from './components/Login/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/Login/register/register.component';
import { AuxlComponent } from './components/Login/auxl/auxl.component';
import { AuxrComponent } from './components/Login/auxr/auxr.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    TablesComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AuxlComponent,
    AuxrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
