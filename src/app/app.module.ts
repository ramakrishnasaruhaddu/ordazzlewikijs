import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebaraccordinComponent } from './sidebaraccordin/sidebaraccordin.component';

import {  ConnectionModule }  from '../app/connection/connection.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebaraccordinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConnectionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
