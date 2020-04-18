import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantOrderComponent } from './components/restaurant-order/restaurant-order.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';


const routes: Routes = [
  { path: '', redirectTo: '/restaurant', pathMatch: 'full' },
  {
    path: 'restaurant',
    component: RestaurantComponent,
    data: { title: 'Jobs Search' },
  },
  {
    path: 'order',
    component: RestaurantOrderComponent,
    data: { title: 'Your Order' },
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
