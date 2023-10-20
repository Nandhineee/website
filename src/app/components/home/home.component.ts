import { Component, OnInit, } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService, private cartService: CartService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.productService.getAllproducts().subscribe({
      next: (data: Product[]) => {
        console.log(data);
        this.products = data;
        this.storageService.setProducts(this.products);
      },
      complete: () => { },
      error: (err: Error) => { },
    });
  }

  addToCart(id: number): void {
    this.cartService.addToCart(id);
  }
}






