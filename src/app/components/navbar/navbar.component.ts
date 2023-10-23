import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/model/users';
import { CartService } from 'src/app/services/cart.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private storageService:StorageService,private router:Router,private cartService:CartService){}

logout():void{ 
  this.storageService.removeLoggedInUser();
  this.router.navigate(['/login'], { replaceUrl: true });

}
getCount(): number {
  let count = this.cartService. getCartCount();
  return count > 0 ? count :0;
}

}
