import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HttpClientModule} from '@angular/common/http';
import{ FormsModule,ReactiveFormsModule} from '@angular/forms';

import{RouterModule} from '@angular/router'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BankComponent } from './bank/bank.component';
import { FilterPipe } from './filter.pipe';
import { ImageComponent } from './image/image.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    FilterPipe,
    ImageComponent,
    RegisterComponent,
    LoginComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
  
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
