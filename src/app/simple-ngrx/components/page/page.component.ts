import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartModel } from '../../models/cart.model';
import { ProductModel } from '../../models/product.model';
import { addProduct, clearProducts, removeProduct } from '../../ngrx/cart.actions';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  cart$ = this.store.select('cart');
  products: any[] = null;

  constructor(
    private store: Store<{cart: CartModel}>,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.getProducts().subscribe(products => this.products = products)
    this.cart$.subscribe(console.log, console.error)
  }

  add(product: ProductModel) {
    this.store.dispatch(addProduct({product}));
  }

  remove(product: ProductModel) {
    this.store.dispatch(removeProduct({product}));
  }

  clearAll() {
    this.store.dispatch(clearProducts())
  }

}
