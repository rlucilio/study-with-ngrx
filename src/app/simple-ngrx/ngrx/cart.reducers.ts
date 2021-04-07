import { createReducer, on } from "@ngrx/store";
import { CartModel } from "../models/cart.model";
import { ProductModel } from "../models/product.model";
import { addProduct, clearProducts, removeProduct } from "./cart.actions";

const initialState = new CartModel();

export const cardReducer = createReducer(
    initialState,
    on(addProduct, (state, payload) => {
        const newState = new CartModel();

        newState.products = [...state.products, payload.product];

        return newState;
    }),
    on(removeProduct, (state, payload) => {
        const newState = new CartModel();
        newState.products = state.products.filter(product => product._id !== payload.product._id)

        return newState;
    }),
    on(clearProducts, (state) => {
        const newState = new CartModel();
        newState.products = [];

        return newState;
    })
)

function getTotal(products: ProductModel[]): number {
    
    
    return products.length ? products.map(item => item.price).reduce((prev, curr) => prev += curr, 0) : 0;
}