import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { SylbsUploadComponent } from './Components/sylbs-upload/sylbs-upload.component';
import { DataserviceService } from './dataservice.service';
import { AccountComponent } from './Components/account/account.component';
import { SylbusComponent } from './Components/sylbus/sylbus.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SylbsUploadComponent,
    AccountComponent,
    SylbusComponent
  ],
  imports: [
    BrowserModule,
  
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
