import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddressComponent } from './dog-owner-create/address/address.component';
import { DogTableComponent } from './dog-owner-create/dog-table/dog-table.component';
import { DogProfileComponent } from './dog-owner-create/dog-profile/dog-profile.component';
import { DogCardsComponent } from './owner-dashboard/dog-cards/dog-cards.component';
import { RecentRequestsComponent } from './owner-dashboard/recent-requests/recent-requests.component';
import { RequestWalkComponent } from './owner-dashboard/request-walk/request-walk.component';
import { OwnerSidebarComponent } from './owner-dashboard/owner-sidebar/owner-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddressComponent,
    DogTableComponent,
    DogProfileComponent,
    DogCardsComponent,
    RecentRequestsComponent,
    RequestWalkComponent,
    OwnerSidebarComponent,
    OwnerDashboardComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }