import { order } from 'src/app/actions/cart.actions';
import { Menu } from 'src/app/models/menu.model';
import { MenuApiService } from 'src/app/services/menu-api.service';

import {
    Component,
    OnInit,
} from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss'],
})
export class RestaurantMenuComponent implements OnInit {
  menuList: Menu[] = [];
  constructor(private store: Store, private menuService: MenuApiService) {}

  ngOnInit(): void {
    this.menuList = this.menuService.getMenus();
  }

  onOrder(id: number) {
    this.store.dispatch(order({ id }));
  }
}
