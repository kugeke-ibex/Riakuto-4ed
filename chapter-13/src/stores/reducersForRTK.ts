import { createReducer } from "@reduxjs/toolkit";
import { add, decrement, increment } from "./actionsForRTK";

export interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0,
};

export const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(decrement, (state) => {
            if (state.count > 0) {
                state.count--;
            }
        })
        .addCase(increment, (state) => {
            state.count++;
        })
        .addCase(add, (state, action) => {
            state.count += action.payload;
        });
});
