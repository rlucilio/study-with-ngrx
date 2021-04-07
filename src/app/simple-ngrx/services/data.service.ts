import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable()
export class DataService {

  constructor() { }

  getProducts(): Observable<ProductModel[]> {
    return of([
      {
        _id: Math.random().toString(),
        title: 'Produto 1',
        category: 'category',
        description: 'description',
        price: 10,
        images: []
      },
      {
        _id: Math.random().toString(),
        title: 'Produto 2',
        category: 'category',
        description: 'description',
        price: 5,
        images: []
      }
    ])
  }
}
