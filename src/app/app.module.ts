import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { RestaurantMenuComponent } from './components/restaurant-menu/restaurant-menu.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { cartReducer } from './reducers';
import { TopMenuComponent } from './shared/top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    RestaurantComponent,
    RestaurantMenuComponent,
    TopMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ cart: cartReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
