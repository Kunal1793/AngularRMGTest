import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
import { ListOfRequestComponent } from './list-of-request/list-of-request.component';
import { LoginComponent } from './login/login.component';
import { CompetencyComponent } from './competency/competency.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'Home', component: HomeComponent},
  {path:'Accounts', component: AccountComponent},
  {path:'RequestList', component: ListOfRequestComponent},
  {path:'Login', component: LoginComponent},
  {path:'Competency', component: CompetencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
