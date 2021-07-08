import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuxlComponent } from './components/Login/auxl/auxl.component';
import { HomeComponent } from './components/home/home.component';
import { AuxrComponent } from './components/Login/auxr/auxr.component';
import { TablesComponent } from './components/tables/tables.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: AuxlComponent},
  {path: 'register', component: AuxrComponent},
  {path: 'legajo', component: TablesComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
