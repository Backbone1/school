import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './Components/account/account.component';
import { LoginComponent } from './Components/login/login.component';
import { SylbsUploadComponent } from './Components/sylbs-upload/sylbs-upload.component';
import { SylbusComponent } from './Components/sylbus/sylbus.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'Dash', component:SylbsUploadComponent},
  {path:'acc', component:AccountComponent},
  {path:'sylbus', component:SylbusComponent},
  {path:'logout', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
