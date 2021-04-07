import { ProductModel } from "./product.model";

export class CartModel {
    private _products: ProductModel[] = [];
    private _total: number = 0;

    set products (products: ProductModel[]) {
        this._products = products;
        this._total = products.map(product => product.price).reduce((prev, curr)=> prev += curr, 0);
    }

    get products(): ProductModel[] {
        return this._products;
    }

    get total(): number {
        return this._total;
    }
}