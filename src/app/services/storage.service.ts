import { Injectable } from '@angular/core';
import { Users } from '../model/users';
import { Product } from '../model/product';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  users: Users[] = [{ id: 1, email: 'nandhini@gmail.com', password: 'nandhini' }];




  loadUsers() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  getAllUsers(): Users[] {
    return JSON.parse(localStorage.getItem('users') as string);
  }

  adduser(user: Users): Users[] {
    let userd = { id: this.users.length + 1, name: user.name, email: user.email, password: user.password };
    this.users.push(userd);
    localStorage.setItem("users", JSON.stringify(this.users));
    return this.users;
  }

  setLoggedInUser(user: Users): void {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
  }

  removeLoggedInUser(): void {
    localStorage.removeItem('loggedInUser');
  }
  getLoggedInUser(): Users {
    return JSON.parse(localStorage.getItem('loggedInUser') as string);
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }

  setProducts(products: Product[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }


  getCachedProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products') as string);
  }


  loadCart(cart: Cart[]): void {
    localStorage.setItem('carts', JSON.stringify(cart));
  }

  getCart(): Cart[] {
    let cart = JSON.parse(localStorage.getItem('carts') as string);
    if (cart === null) {
      cart = [];
    }
    return cart;
  }

  loggedInUserDetails(): Users {
    return JSON.parse(localStorage.getItem('loggedInUser') as string);
  }
  loadOrders(orders: Cart[]): void {
    localStorage.setItem('orders', JSON.stringify(orders));
  }
  getOrders(): Cart[] {
    return JSON.parse(localStorage.getItem('orders') as string);
  }
}

