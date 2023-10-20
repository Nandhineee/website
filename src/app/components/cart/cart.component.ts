import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { Users } from 'src/app/model/users';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  Loader: Product[] = [];
  orders: Cart[] = [];

  constructor(private storageService: StorageService, private router: Router) {
    this.cartLoader();
  }
  cartLoader(): void {
    let carts: Cart[] = this.storageService.getCart();
    let loggedInUser: Users = this.storageService.loggedInUserDetails();
    if (carts) {
      for (let user of carts) {
        if (user.user.id === loggedInUser.id) {
          for (let prod of user.cart) {
            this.Loader.push(prod);
          }
        }
      }
    }
  }

  placeOrder(): void {

    console.log("this is cart");
    let carts: Cart[] = this.storageService.getCart();
    let loggedInUser: Users = this.storageService.loggedInUserDetails();
    let tempCart: Cart[] = [];
    if (carts) {
      for (let user of carts) {
        if (user.user.id !== loggedInUser.id) {
          tempCart.push(user);
        } else {
          this.orders.push(user);
          this.storageService.loadOrders(this.orders);
        }
      }
      carts = tempCart;
      this.storageService.loadCart(carts);
      this.Loader = [];
      this.router.navigate(["order"], { replaceUrl: true });
    }
  }
}

