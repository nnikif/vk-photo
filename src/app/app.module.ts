import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router"
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { MyhomeComponent } from './myhome/myhome.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyhomeComponent,
    PhotoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
