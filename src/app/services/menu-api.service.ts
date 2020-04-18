import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { menuData } from '../data/test-data/menu-mock';

@Injectable({
  providedIn: 'root'
})
export class MenuApiService {
  getMenus() {
    return menuData;
  }
}
