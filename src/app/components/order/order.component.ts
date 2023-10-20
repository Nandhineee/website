import { Component } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Users } from 'src/app/model/users';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  orders: Cart[] = this.storageService.getOrders();
  Loader: Cart[] = [];
  constructor(private storageService: StorageService) {
    this.ordersLoad();
  }
  ordersLoad(): void {
    let loggedInUser: Users = this.storageService.loggedInUserDetails();
    if (this.orders) {
      let orders: Cart[] = this.storageService.getOrders();

      for (let order of orders) {
        if (order.user.id === loggedInUser.id) {
          console.log(order);

          this.Loader.push(order);
        }
      }
    }
  }
}

