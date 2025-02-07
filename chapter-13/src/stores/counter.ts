import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
    count: number;
}
const initialState: CounterState = {
    count: 0,
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
        decrement: (state) => {
            if (state.count > 0) {
                state.count--;
            }
        },
        increment: (state) => {
            state.count++;
        },
    },
});
