import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storageService: StorageService) { }
  isValidUser(user: Users): boolean {
    let users: Users[] = this.storageService.getAllUsers();
    let isUser: boolean = false;
    for (let u of users) {
      if (u.email === user.email && u.password === user.password) {
        isUser = true;
        this.storageService.setLoggedInUser(u);
        break;
      }
    }

    return isUser;
  }

  isUserloggedIn(): boolean {
    return this.storageService.isUserLoggedIn();
  }




}
