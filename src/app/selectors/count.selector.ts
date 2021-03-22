import { createSelector } from "@ngrx/store";

export interface CounterFeature {
    position: number;
}

export interface AppState {
    counter: CounterFeature;
}

export const getCounterValue = (state: AppState) => state.counter;

 export const getCount = () => createSelector(
     (state, props) => state.counter[props.id],
     (counter, props) => counter * props.multiply
 )