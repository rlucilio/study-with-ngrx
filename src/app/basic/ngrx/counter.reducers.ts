import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

export const initialStore = 0;

const _counterReducer = createReducer(
    initialStore,
    on(decrement, state => state -= 1),
    on(increment, state => state += 1),
    on(reset, state => state = initialStore)
)

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}