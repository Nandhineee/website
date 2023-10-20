import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient, private storageService:StorageService) { }
  getAllproducts():Observable<Product[]> {
    
    return this.http.get<Product[]>('https://fakestoreapi.com/products')

    }

    getLocalProduct(): Product[]{
      return this.storageService.getCachedProducts();
    }

   
  }

