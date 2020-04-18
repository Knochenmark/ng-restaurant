import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantMenuComponent } from './components/restaurant-menu/restaurant-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    RestaurantMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
