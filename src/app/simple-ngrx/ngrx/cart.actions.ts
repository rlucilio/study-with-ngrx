import { createAction, props } from "@ngrx/store";
import { ProductModel } from "../models/product.model";

enum CartActions {
    add = '[Cart] Add product',
    remove = '[Cart] Remove product',
    clear = '[Cart] Clear products'
}

export const addProduct = createAction(CartActions.add, props<{ product: ProductModel }>());
export const removeProduct = createAction(CartActions.remove, props<{ product: ProductModel}>());
export const clearProducts = createAction(CartActions.clear);
