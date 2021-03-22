import { createSelector } from '@ngrx/store';

export interface State {
    counter1: number;
    counter2: number;
};

export const selectCounter1 = (state: State) => state.counter1;
export const selectCounter2 = (state: State) => state.counter2;

export const selectTotal = createSelector(
    selectCounter1,
    selectCounter2,
    (counter1, counter2) => counter1 + counter2
); // selectTotal cache = null

let state = { counter1: 3, counter2: 4 };

selectTotal(state); // selectTotal cache = 7
selectTotal(state); // selectTotal cache = 7
selectTotal.release(); // selectTotal cache = null;

state = { ...state, counter2: 5 };

selectTotal(state); // selectTotal cache = 8