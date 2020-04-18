import { Component, OnInit, Inject } from '@angular/core';
import { MenuApiService } from 'src/app/services/menu-api.service';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {
  menuList: Menu[] = [];
  constructor(private menuService: MenuApiService) {}

  ngOnInit(): void {
    this.menuList = this.menuService.getMenus();
    // this.menuList.find(item=>item.image);
  }

}
